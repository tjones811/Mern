import React from 'react';
import {useParams} from "react-router";

const Page = ()=>{
    const {number,word,color1,color2} = useParams();
    return(

        <>
        {

        }
        <div style = {{color: color1,backgroundColor: color2}}>

            {
                word === "home"?
                <h1>Welcome</h1>:

                <h1>The Word is : {word}</h1>

            }
        </div>
        </>
    )
}

export default Page;