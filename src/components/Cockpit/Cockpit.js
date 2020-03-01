import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length<=2){
      //assignedClasses.push('red');
      assignedClasses.push( classes.red );
    }
    if (props.persons.length<=1){
      //assignedClasses.push('bold');
      assignedClasses.push( classes.bold );
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button
                className={btnClass} 
                alt="{props.showPersons}"
                onClick={props.buttonClicked}>Toggle Persons
            </button>
        </div>
    );
}

export default cockpit;