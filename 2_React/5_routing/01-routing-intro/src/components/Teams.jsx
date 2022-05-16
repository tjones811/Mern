import React from 'react';
import {useParams} from "react-router";

const Teams = ()=>{
    const {id,color} = useParams();
      //if the id is an number,show "team #is", if the id is not a number, show "team name is":


    return(
        <>
        <h3>Teams component</h3>
        <ol>
            <li>Lakers</li>
            <li>Wizards</li>
            <li>Mavs</li>
            <li>Suns</li>
            <li>Knicks</li>
        </ol>
        <hr />

        <div style = {{backgroundColor:color}}>

            {

                id === undefined?
                <p>What is your favortie team?</p>:


                isNaN(id)?
                id == "celtics"? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbQGOt3kUT_9Bz3yKcghG3YgaBmrfID0QqNYoqJDW1cvriZWbpaiPTNtrX4ymqE7-18B8&usqp=CAU" width = "250px"  alt="" />:
                    <h4>Displaying information team name is: {id}</h4>:
                    <h4>Displaying information team # is: {id}</h4>
            }
        </div>
        </>
    )
}

export default Teams;