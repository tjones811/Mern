import React , { Component } from 'react';

class PersonCard extends Component {
    render() {

        let {lastName, firstName, age, hairColor,children} = this.props

        function increaseAge(){

        }


        return(

            <>
                <div>
                    <h1>Name : {lastName}, {firstName}</h1>
                    <h2>Age: {age} </h2>
                    <h2>Hair Color:  {hairColor} </h2>
                    {children}
                    <button onClick={increaseAge}>Birthday Button for {firstName} {lastName} </button>
                    {/* <button onClick = {()=> console.log(`clicked ${firstName}`)}>Birthday Button for {firstName} {lastName}</button> */}
                </div>
                <hr />
            </>
            
        );
    }
}

export default PersonCard;