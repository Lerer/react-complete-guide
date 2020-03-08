import React, {useEffect} from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log('Cockpit.js | rendering.... => useEffect');
    },[]);

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength<=2){
      //assignedClasses.push('red');
      assignedClasses.push( classes.red );
    }
    if (props.personslength<=1){
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

export default React.memo(cockpit);