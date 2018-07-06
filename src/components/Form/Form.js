import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';

const animalDefault = {
  name: '',
  imgUrl: '',
  description: '',
};

class Form extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    newAnimal: animalDefault,
  }

  formFieldStringState = (name, e) => {
    const tempAnimal = {...this.state.newAnimal};
    tempAnimal[name] = e.target.value;
    this.setState({newAnimal: tempAnimal});
  }

  nameChange = e => {
    this.formFieldStringState('name', e);
  }

  imgUrlChange = e => {
    this.formFieldStringState('imgUrl', e);
  }

  descriptionChange = e => {
    this.formFieldStringState('description', e);
  }

  formSubmit = (e) => {
    const { onSubmit } = this.props;
    const { newAnimal } = this.state;
    e.preventDefault();
    if (
      newAnimal.name &&
      newAnimal.imgUrl &&
      newAnimal.description
    ) {
      onSubmit(this.state.newAnimal);
      this.setState({ newAnimal: animalDefault });
    } else {
      alert('Please fill in all fields.');
    }
  }

  render () {
    const { newAnimal } = this.state;
    return (
      <div className="Form">
        <h3>Add an Animal</h3>
        <form onSubmit={this.formSubmit}>
          <div className="row">
            <fieldset className="col-xs-10 col-xs-offset-1">
              <label htmlFor="name">Name:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="name"
                placeholder="Name"
                value={newAnimal.name}
                onChange={this.nameChange}
              />
            </fieldset>
          </div>
          <div className="row">
            <fieldset className="col-xs-10 col-xs-offset-1">
              <label htmlFor="imgUrl">Image URL:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="imgUrl"
                placeholder="Image URL"
                value={newAnimal.imgUrl}
                onChange={this.imgUrlChange}
              />
            </fieldset>
          </div>
          <div className="row">
            <fieldset className="col-xs-10 col-xs-offset-1">
              <label htmlFor="description">Description:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="description"
                placeholder="Animal's Description"
                value={newAnimal.description}
                onChange={this.descriptionChange}
              />
            </fieldset>
          </div>
          <button className="col-xs-6 btn btn-info col-xs-offset-3">Save Animal</button>
        </form>
      </div>
    );
  }
}

export default Form;
