import React, {Component} from 'react';
import styled from 'styled-components';
import './App.css';

import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  curser: pointer;
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`

class App extends Component {
  state = {
    persons: [
      {id:'qfsdf', name: 'Coby', age: 43},
      {id:'sdk3c', name: 'Hilah', age: 42},
      {id:'klj98', name: 'Leenoy', age: 9}
    ],
    showPersons : false
  } 

  switchNameHandler = (name) => {
    this.setState({persons: [
      { name: name, age: 43},
      {name: 'Hilah', age: 42}
    ]});
  }

  nameChangeEventHandler = (event,id) => {
    console.log(event);
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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      curser: 'pointer',
      ':hover' : {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              changed={(event) => this.nameChangeEventHandler(event,person.id)}
              age={person.age}
              key={person.id}>a person
            </Person>
          })}
        </div>
      );
      // style.backgroundColor='red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }

    }

    const classes = [];
    if (this.state.persons.length<=2){
      classes.push('red');
    }
    if (this.state.persons.length<=1){
      classes.push('bold');
    }



    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <StyledButton 
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
