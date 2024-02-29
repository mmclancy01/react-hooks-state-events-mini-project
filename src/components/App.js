import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [select, setSelect] = useState("All") 
  
  


 function onTaskFormSubmit (arg) {
  
  
  setTasks([...tasks, arg])
 }
 
  function handleSelect (category){
  if (category === "All"){
   setTasks(TASKS)
  } else{
    let filty = TASKS.filter((task)=>
     task.category === category
    )
    setTasks(filty)
    setSelect(category)
  }

}

 
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      
      <CategoryFilter 
      categories= {categories}
      setCategories= {setCategories}
      select={select}
      setSelect={setSelect}
      handleSelect={handleSelect}
      />
      <NewTaskForm
      categories= {categories}
      tasks={tasks}
      setTasks={setTasks}
      onTaskFormSubmit={onTaskFormSubmit}
      
       />
      <TaskList
      tasks={tasks}
      setTasks={setTasks}
      />
      
    </div>
  );
}

export default App;
