import { useState } from "react";

const Newtask = ({ job }) => {
  return <div>{job}</div>;
};

const List = ({ task }) => {
  return (
    <ol>
      {task.map((item) => {
        return (
          <li key={item.id}>
            <Newtask job={item.task} />
          </li>
        );
      })}
    </ol>
  );
};

const Jay = () => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const [myName, setMyname] = useState([
    {
      id: Math.random(),
      task: "task",
    },
  ]);
  const addMyName = () => {
    setMyname([...myName, { id: Math.random(), task: `${inputValue}` }]);
    console.log(myName);

    setInputValue("");
  };
  return (
    <>
      {/* <h1> {myName} </h1> */}
      <List task={myName} />

      <input value={inputValue} onChange={handleSubmit} />
      <button type="submit" name="Valiallah" onClick={addMyName}>
        Submit
      </button>
    </>
  );
};

export default Jay;
