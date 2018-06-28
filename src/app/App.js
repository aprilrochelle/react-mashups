import React from 'react';

import connection from '../firebaseRequests/connection';
import animalRequests from '../firebaseRequests/getAnimals';
import Animals from '../components/Animals/Animals';
import Form from '../components/Form/Form';

import './App.css';

class App extends React.Component {

  state = {
    animalz: [],
  }

  componentDidMount () {
    connection();
    animalRequests()
      .then((animalz) => {
        this.setState({animalz});
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render () {
    return (
      <div className="App">
        <div className="col-md-8">
          <Animals animalz={this.state.animalz}/>
        </div>
        <div className="col-md-4">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
