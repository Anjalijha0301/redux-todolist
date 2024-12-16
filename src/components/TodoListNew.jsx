import React, { useState } from "react";

const TodoListNew = ({ value }) => {
  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([]);

  console.log("task", task);

  const addTasks = () => {
    if (task !== "") {
      setTaskList([...taskList, task]);
    } else {
      alert("Please Enter the value ");
    }
  };
  console.log("list", taskList);
  const clearTasks = () => {
    setTaskList([]);
  };
  return (
    <div className="container">
      <input
        type="text"
        id="task"
        name="task"
        placeholder="Task"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button onClick={() => addTasks()}>Add Task</button>
      <button onClick={() => clearTasks()}>Clear Task</button>

      <h1>Lists are here</h1>
      <ul>
        {taskList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListNew;
