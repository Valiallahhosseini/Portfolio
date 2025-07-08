import { useState } from "react";
import { nanoid } from "nanoid";

const Form = ({ onTaskSubmit }) => {
  const [newTask, setNewTask] = useState("");
  const addNewTask = (e) => {
    e.preventDefault();
    onTaskSubmit({
      id: nanoid(),
      newTask,
    });
    setNewTask("");
  };

  return (
    <form onSubmit={addNewTask}>
      <textarea
        value={newTask}
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
