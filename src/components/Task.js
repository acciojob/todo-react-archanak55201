import React, { useState } from "react";

const Task = (prop)=>{
    const [input,setInput] = useState('');
    console.log(prop);
    return (
        <div>
            <input type="text" placeholder="enter task" value={input}
                onChange={(e)=>(setInput(e.target.value))}
            />
            <button onClick={()=>{
                prop.addTask(input)
                setInput("");
            }}>Add Task</button>
        </div>
    )

}
export default Task;