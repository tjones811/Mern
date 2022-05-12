import React,{useState} from 'react';

const Coins = ()=>{


    //create a variable to store all the coin in that we get back
    let [coinList,setCoinList] = useState([])
    
    
    
    const getCoins = ()=>{
        console.log('getting the coins now...but i also got to make breakfast')

        //fetch gives back a promise. A promise is a set of code that is asynchronous(it does not go from line to line) where the response time is not exact so we can allow it to perform some task or run some code while it is waiting to get back the response.When it gets back the response,we can tell it what to do in the .then()
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then(response=>{ //.then means whenever the api is done getting back the data
            return response.json()// convert the response to json the our application can read
        })
        .then(convertedResponse=>{
            console.log('got the response-->', convertedResponse) //when the dog gets back the response
            setCoinList(convertedResponse)
        })
        .catch(err=>{ //.catch is for if there is any issue in getting the data
            console.log("something went wrong",err)
        })
        
        console.log('doing other stuff while waiting for the api results to come back')
    }
    
    
    
    
    return(
        <>
            <div>
                <button onClick = {getCoins}>Click me to get the latest coin info!</button>
                {
                     //this is a callback funtion. A callback function is a funtion that you give as an input to another funtion call 
                    coinList.map((coin,idx)=>{
                        return(
                            <div key = {idx} >
                                <h3>{coin.name}</h3>
                                <p>Price: {coin.current_price}</p>
                                <img src={coin.image} alt=""  width="100px"/>
                            </div>
                        )
                    }) 
                }
            </div>
        </>
    )
}


export default Coins;