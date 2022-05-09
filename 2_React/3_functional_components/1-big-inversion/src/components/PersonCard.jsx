import React from 'react';

const PersonCard = (props)=>{

    const {firstName,lastName,age,hairColor,children} = props;

    return (
        <>
            <div>
                <h1>Name: {lastName} {firstName}  </h1>
                <h2>Age: {age}</h2>
                <h2>Hair Color: {hairColor} </h2>
                {children}
            </div>
            <hr />
        
        
        
        </>
    )

}

export default PersonCard;

