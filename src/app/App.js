import React from 'react';
import Animals from '../components/Animals/Animals';
import Form from '../components/Form/Form';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <div className="col-md-8">
          <Animals />
        </div>
        <div className="col-md-4">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
