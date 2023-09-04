import './App.css';
import { useState } from 'react';
import {Task} from './Task';

function App() {
  const [todoList,setTodoList]=useState([]);
  const [newTask,setNewTask]=useState("");

  const handleChange=(event)=>{
    setNewTask(event.target.value);
  }

  const addTask=()=>{
    //const newTodoList=[...todoList,newTask];//... means to make an array that composed everything of the todoList with the element newTask
    const task={
      id:todoList.length===0?1: todoList[todoList.length-1].id+1,
      taskName:newTask,
      completed:false
    };
    const newTodoList=[...todoList,task];//... means to make an array that composed everything of the todoList with the element newTask

    setTodoList(newTodoList);
  }

  const deleteTask=(id)=>{
    const newTodoList=todoList.filter((task)=>task.id!==id);
    setTodoList(newTodoList);
  }

  const completeTask=(id)=>{
    setTodoList(
      todoList.map((task)=>{
        if(task.id===id){
          return {...task,completed:true};//...task is keeping it the same
        }else{
          return task;
        }
      })
      );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task)=>{
          return(
             <Task
                taskName={task.taskName}
                id={task.id}
                completed={task.completed}  
                deleteTask={deleteTask}  
                completedTask={completeTask}/>
          );
        })}
      </div>
    </div>
  );
}

export default App;
