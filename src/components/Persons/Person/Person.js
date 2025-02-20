import React, {Component} from 'react';
import classes from './Person.module.css';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('Person.js | rendering.... => ');
            //<div className={classes.Person}>

        return (
            <Aux>
                {(this.context.authenticated) ? 
                    <p>Authenticated</p> : 
                    <p>Please login</p>
                }
                <p onClick={this.props.click}>
                    I'm a {this.props.name} and i am {this.props.age} years old
                </p>
                <p>{this.props.children}</p>
                <input 
                    type="text"
                    ref={this.inputElementRef}
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </Aux>
        );   
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person,classes.Person);