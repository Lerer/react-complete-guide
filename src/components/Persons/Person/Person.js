import React, {Component,Fragment} from 'react';
import classes from './Person.module.css';

//import Aux from '../../../hoc/Auxiliary';

class Person extends Component {

    render() {
        console.log('Person.js | rendering.... => ');
            //<div className={classes.Person}>

        return (
            <Fragment>
                <p onClick={this.props.click}>
                    I'm a {this.props.name} and i am {this.props.age} years old
                </p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </Fragment>
        );   
    }
}

export default Person;