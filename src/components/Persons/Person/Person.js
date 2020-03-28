import React, {Component} from 'react';
import classes from './Person.module.css';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('Person.js | rendering.... => ');
            //<div className={classes.Person}>

        return (
            <Aux>
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