import React from 'react';
import './Animals.css';

class Animals extends React.Component {
  render () {
    const {animalz} = this.props;
    const animalComponentz = animalz.map((animal) => {
      return (
        <div key={animal.id} className="animalHolder col-md-4">
          <img src={animal.imgUrl} alt="animal pic"/>
          <h3>{animal.name}</h3>
          <p>{animal.description}</p>
        </div>
      );
    });
    return (
      <div className="Animals">
        <h2>Animals</h2>
        <div>
          {animalComponentz}
        </div>
      </div>
    );
  }
}

export default Animals;
