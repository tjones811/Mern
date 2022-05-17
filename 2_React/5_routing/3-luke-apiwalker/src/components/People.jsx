import React from 'react';

const People = (props)=>{
    const {detail} = props;
    return(
        <div>
            <h1>Name: {detail.name}</h1>
            <p>Height: {detail.height}</p>
            <p>Mass: {detail.mass}</p>
            <p>Hair Color: {detail.hair_color}</p>
        </div>
    )
}

export default People;