import React, {Component} from 'react';
//import styled from 'styled-components';
//import './App.css';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id:'qfsdf', name: 'Coby', age: 43},
      {id:'sdk3c', name: 'Hilah', age: 42},
      {id:'klj98', name: 'Leenoy', age: 9}
    ],
    otherState: 'some other value',
    showPersons : false
  } 

  switchNameHandler = (name) => {
    this.setState({persons: [
      { name: name, age: 43},
      {name: 'Hilah', age: 42}
    ]});
  }

  nameChangeEventHandler = (event,id) => {
    //console.log(event);
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  render() {
    let persons = null;

    if (this.state.showPersons){
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeEventHandler}/>
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          buttonClicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
