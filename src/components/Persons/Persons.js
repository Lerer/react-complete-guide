import React, {Component} from 'react';

import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props,state){
  //   console.log('Persons.js | getDerivedStateFromProps => ');
  //   return state;
  // }

  shouldComponentUpdate(nextProps,nextState){
    console.log('Persons.js | shouldComponentUpdate => ');
    if (nextProps.persons!==this.props.persons){
      return true;
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('Persons.js | getSnapshotBeforeUpdate => ');
    return null;
  }

  componentDidUpdate() {
    console.log('Persons.js | componentDidUpdate => ');
  }

  render() {
    console.log('Persons.js | rendering.... => ');
    return this.props.persons.map((person,index) => {
        return (
          <Person 
            key={person.id}
            click={() => this.props.clicked(index)} 
            name={person.name} 
            changed={(event) => this.props.changed(event,person.id)}
            age={person.age}
          />
        );
      });
    }
  }

export default Persons;
