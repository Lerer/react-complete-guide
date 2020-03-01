import React, {Component} from 'react';
//import styled from 'styled-components';
//import './App.css';
import classes from './App.module.css';

import Person from '../components/Persons/Person/Person';
//import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   curser: pointer;
//   &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `

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
    let btnClass = '';

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
                  key={person.id}
                  click={() => this.deletePersonHandler(index)} 
                  name={person.name} 
                  changed={(event) => this.nameChangeEventHandler(event,person.id)}
                  age={person.age}>a person
                </Person>
             // </ErrorBoundry>
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length<=2){
      //assignedClasses.push('red');
      assignedClasses.push( classes.red );
    }
    if (this.state.persons.length<=1){
      //assignedClasses.push('bold');
      assignedClasses.push( classes.bold );
    }



    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button
          className={btnClass} 
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
