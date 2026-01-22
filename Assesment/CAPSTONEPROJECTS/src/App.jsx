import { useState } from 'react'
// import './App.css'
// import AddTodo from './redux/AddTodo'
// import Todos from './redux/Todos'
import TaskForm from './Component1/TaskForm'
import TaskList from './Component1/TaskList'

function App() {
  

  return (
   <>
   {/* <div>Redux ToolKit</div>
   <AddTodo/>
   <Todos/> */}

   <h2>Task Manager App (Redux)</h2>
      <TaskForm />
      <TaskList />


   </>
  )
}

export default App
