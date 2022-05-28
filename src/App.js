import './App.css';
import Todo from './components/todo';
import React, { useState } from 'react';

function App() {

  const [Task, setTask] = useState('')
  const [Time, setTime] = useState('')
  const [Tasklist, setTasklist] = useState([])

  const addTask=()=>{
    setTasklist([...Tasklist, {task:Task, time: Time}])
    setTask('')
    setTime('')
  }

  return (
    <div className='App'>

      <label><h3>Task</h3></label>
      <input type="text" placeholder='Enter Task' id='task' onChange={(e)=>{
        setTask(e.target.value)
      }}/>

      <label><h3>Time</h3></label>
      <input type="text" placeholder='Enter time' id='time' onChange={(e)=>{
        setTime(e.target.value)
      }}/>


      <button onClick={addTask}>Add</button>

      {/* <Todo listItem= "eat" listTime="4pm"/> */}
      {Tasklist.map((item)=>{
        return <Todo listItem={item.task} listTime={item.time}/>
      })}

      
    </div>
  );
}

export default App;
