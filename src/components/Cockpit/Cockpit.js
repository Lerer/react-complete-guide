/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useContext} from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const authContext = useContext(AuthContext);
    console.log(authContext.authenticated);

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
            <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Login</button>}
            </AuthContext.Consumer>
        </div>
    );
}

export default React.memo(cockpit);