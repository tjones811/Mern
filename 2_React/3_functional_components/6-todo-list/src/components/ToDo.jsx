import React, {useState} from 'react';
const ToDo = ()=>{

    let [taskName,setTaskName] = useState();

    let [taskCompleted,setTaskCompleted] = useState(false);

    let [taskList,setTaskList] = useState([]);
    
    const submitTask = (event)=>{
        event.preventDefault();

        let task = {taskName,taskCompleted}

        setTaskList([...taskList,task])

        setTaskName("");
    }

    const toggleTask = (event,idx)=>{

        let[...copyList] = taskList;
        copyList[idx].taskCompleted = event.target.checked;
        setTaskList(copyList)
    }

    const deleteTask = (event,idx)=>{
        let filteredCopy = taskList.filter((task,i)=>{
            return i != idx
        })

        setTaskList(filteredCopy);

    }

    return(
        <>
        <form onSubmit= {submitTask} >
            <div className="form-group">
                <label>Task:</label>
                <input onChange={(event)=>{setTaskName(event.target.value)}} value = {taskName} type="text" className="form-control" />
            </div>

            <input type="submit" value="Add" className = "btn btn-primary mt-2" />
        </form>
        <hr />

        <div className="taskList">
            {
                taskList.map((taskObj,idx)=>{
                    return (

                        <div key={idx} className="task">
                            <h1 style = {{textDecoration:taskObj.taskCompleted? "red line-through":"none"}}>{taskObj.taskName}<input type="checkbox" onChange={(event)=>toggleTask(event,idx)} />  </h1>
                            
                            <button onClick={(event)=>{deleteTask(event,idx)}} className="btn btn-danger">Delete</button>

                        </div>

                    )
                })
            }
        </div>
        </>
    )

}

export default ToDo;