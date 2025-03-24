import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  function addTask() {
    setTasks([...tasks, `Task ${tasks.length + 1}`]);
  }

  return (
    <>
          <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
