
import React , {useState} from "react";
import './../styles/App.css';
import Task from "./Task";
import "./../App.css";

const App = () => {
  const [listTodo,setListTodo]=useState([]);

  const addTask=(task)=>{
    if(task!==""){
    setListTodo([...listTodo,task]);}
  }
  const deleteTask=(index)=>{
    let arr = [...listTodo];
    arr.splice(index,1);
    setListTodo([...arr]);
  }
  console.log(listTodo);
  return (
    <div className="main">
      
      <div>
<<<<<<< HEAD
      <div className="inp-div">
=======
    <div className="inp-div">
>>>>>>> 0c0700124739c99b852a9af25e98ae509e2926b8
        <Task addTask={addTask}/>
      </div>
        <h1>TODO List</h1>
        {
          listTodo && (
            listTodo.map((task,index)=>(
              <div style={{width:"20vw"}}>
              <ul>
                  <li><span>{task}</span>
                      <button
                          onClick={()=>(
                              deleteTask(index)
                          )}
                      >Delete</button>
                  </li>
              </ul>

      </div>
            ))
          )
        }
      </div>
    </div>
  )
}

export default App
