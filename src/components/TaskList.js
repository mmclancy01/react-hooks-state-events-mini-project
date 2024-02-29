import React from "react";
import Task from "./Task";


function TaskList({tasks, setTasks}) {
  
  return (
    <div className="tasks">
    {tasks.map((task, index)=> {
    return (
      <Task 
      task={task}
      key={index}
      setTasks={setTasks}
      tasks={tasks}
      category={task.category}
      text= {task.text}
      />
    )
})}
    </div>
  );
}

export default TaskList;
