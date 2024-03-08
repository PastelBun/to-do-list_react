import React from "react";
import "./TodoItem.css";
function TodoItem({ task, deleteTask, toggleCompleted }) {
  function handleChange() {
    toggleCompleted(task.id);
  }

  return (
    <div className={`todo-item ${task.completed ? "completed" : ""}`}>
      <input className="checkbox" type="checkbox" checked={task.completed} onChange={handleChange} />
      <p>{task.text}</p>
      <button className="deleteButton" onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
}
export default TodoItem;
