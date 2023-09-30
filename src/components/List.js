import React from "react";

const List = (props)=>{
    console.log(props);
    return(
        <div style={{width:"20vw"}}>
                <ul>
                    <li><span>{props.task}</span>
                        <button
                            onClick={()=>(
                                props.deleteTask(props.index)
                            )}
                        >Delete</button>
                    </li>
                </ul>

        </div>
    )
}

export default List;