import React, {Component} from 'react';
//import styled from 'styled-components';
//import './App.css';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js | constructor =>');
  }

  state = {
    persons: [
      {id:'qfsdf', name: 'Coby', age: 43},
      {id:'sdk3c', name: 'Hilah', age: 42},
      {id:'klj98', name: 'Leenoy', age: 9}
    ],
    otherState: 'some other value',
    showPersons : false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  } 

  static getDerivedStateFromProps(props,state) {
    console.log('App.js | getDerivedStateFromProps => ',props);
    return state;
  }

  componentDidMount() {
    console.log('App.js | componentDidMount => ');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App.js | shouldComponentUpdate => ');
    return true;
  }

  componentDidUpdate() {
    console.log('App.js | componentDidUpdate => ');
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

    this.setState((prevState,props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
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

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log('App.js | render => ');
    let persons = null;

    if (this.state.showPersons){
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeEventHandler}/>
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider 
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler}}>
          {this.state.showCockpit ? (
          <Cockpit
            title={this.props.title}
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            buttonClicked={this.togglePersonsHandler}/>
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App,classes.App);
