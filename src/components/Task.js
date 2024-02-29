import React from "react";


function Task({task, setTasks, tasks, text, category}) {
  function handleDelete() {
   const that= tasks.filter((t)=> {
   return t.text !== task.text})
      setTasks(that)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDelete}  className="delete">X</button>
    </div>
  );
}

export default Task;
