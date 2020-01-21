import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:'qfsdf', name: 'Coby', age: 43},
      {id:'sdk3c', name: 'Hilah', age: 42}
    ],
    showPersons : false
  } 

  switchNameHandler = (name) => {
    //console.log('was clicked');
    //this.state.persons[0].name = 'Yaakov';
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

    // this.setState( {
    //   persons: [
    //     { name: event.target.value, age: 43},
    //     {name: 'Hilah', age: 42}      ]
    // })
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
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      curser: 'pointer'
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
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div',{className:'App'},
    //   React.createElement('h1',null,'Hi, I\'m a React App!!!'));
  }
}

/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/

export default App;
