import React , { Component } from 'react';

class PersonCard extends Component {
    render() {

        let {lastName, firstName, age, hairColor} = this.props
        return(
            <div>
                <h1>Name : {lastName}, {firstName}</h1>
                <h2>Age: {age} </h2>
                <h2>Hair Color:  {hairColor} </h2>
            </div>
        );
    }
}

export default PersonCard;