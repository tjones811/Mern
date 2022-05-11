import React, {useState} from 'react';


const Box = ()=>{
    
    let [color,setColor] = useState();
    let [size,setSize] = useState();
    
    let [boxList,setBoxList] = useState([]);
    const submitBox = (event)=>{
        event.preventDefault();

        let box = {color,size}

        setBoxList([...boxList,box])

    }
    
    
    return(
        <>
            <form onSubmit={submitBox} >
                <div className="form-group">
                    <label >Color</label>
                    <input onChange= {(event)=>{setColor(event.target.value)}} type="text" className="form-control"  />
                </div>

                <div className="form-group">
                    <label >Size</label>
                    <input onChange= {(event)=>{setSize(event.target.value)}}type="number" className="form-control"  />
                </div>

                <input type="submit" value="Add Box" className="btn btn-success mt-2" />
            </form>

            <hr />
            <div className="boxList">
                {
                    boxList.map((boxObj,idx)=>{
                        return(
                            <div className="box" style = {{backgroundColor:boxObj.color,height:boxObj.size+"px",width:boxObj.size+"px"}}></div>
                        )
                    })
                }
            </div>
        </>
    )

}

export default Box;
