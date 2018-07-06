import axios from 'axios';
import constants from '../constants';

const getAnimals = () => {
  return new Promise ((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/mashups.json`)
      .then((results) => {
        const animalArray = [];
        if (results.data !== null) {
          Object.keys(results.data).forEach((key) => {
            results.data[key].id = key;
            animalArray.push(results.data[key]);
          });
        }
        resolve(animalArray);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const postAnimal = (animal) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/mashups.json`, animal)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { getAnimals, postAnimal };
