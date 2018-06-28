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

export default getAnimals;
