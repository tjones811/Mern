import React, {useState} from 'react';

const PersonCard = (props)=>{

    const {firstName,lastName,hairColor,children} = props;
    
    //Use state when you want a variable that can change its value and the change in 
    //its value needs to be reflected in the screen/window
    let [age,setAge] = useState(props.age)
    
    const increaseAge = () => {
        setAge(age + 1);
    }
    return (
        <>
            <div>
                <h1>Name: {lastName} {firstName}  </h1>
                <h2>Age: {age}</h2>
                <h2>Hair Color: {hairColor} </h2>
                {children}
                <button onClick = {increaseAge}>Increase age for {firstName} {lastName}</button>
            </div>
            <hr />
        
        
        
        </>
    )

}

export default PersonCard;

