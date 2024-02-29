import React, {useState} from "react";


function NewTaskForm({categories, onTaskFormSubmit}) {
  const [taskName, setTaskName]= useState("")
  const [catName, setCatName]= useState("")
  function handleSubmit(e){
    e.preventDefault()
    const newTasks= {
      text: taskName, 
      category: catName,
    }
    onTaskFormSubmit(newTasks)
  }
  
  return (
    <form onSubmit = {handleSubmit} className="new-task-form">
      <label>
        Details
        <input
        
          type="text" name="text" value={taskName} onChange={(e) => setTaskName(e.target.value)}></input>
      </label>
      <label>
        Category
        <select value={catName} onChange={(e)=> setCatName(e.target.value)} name="category" >
          {categories.filter((cat) => cat !== "All").map((cat, index)=><option key={index}>{cat}</option>)

          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
