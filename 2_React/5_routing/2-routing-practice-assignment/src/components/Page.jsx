import React from 'react';
import {useParams} from "react-router";

const Page = ()=>{
    const {number,word,color1,color2} = useParams();
    return(
        <>
            <h2>Fun</h2>
        </>
    )
}

export default Page;