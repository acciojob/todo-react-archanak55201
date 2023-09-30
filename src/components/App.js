
import React , {useState} from "react";
import './../styles/App.css';
import Task from "./Task";
import "./../App.css";
import List from "./List";
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
      <div className="inp-div">
        <Task addTask={addTask}/>
      </div>
      <div>
        <h1>TODO List</h1>
        {
          listTodo && (
            listTodo.map((task,index)=>(
                <List task={task} index={index} deleteTask={deleteTask}/>
            ))
          )
        }
      </div>
    </div>
  )
}

export default App
