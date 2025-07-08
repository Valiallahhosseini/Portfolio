const Person = ({ name }) => {
  return <div>{name}</div>;
};
const People = ({ items }) => {
  return (
    <ol>
      {items.map((person) => (
        <li key={person.id}>
          <Person name={person.name} />
        </li>
      ))}
    </ol>
  );
};
const ToDoList = ({ list }) => {
  return (
    <ol>
      {list.map((item) => (
        <li>{item.name}</li>
      ))}
    </ol>
  );
};

const Jay = () => {
  const personName = "Javid";

  const [people, setpeople] = useState([
    {
      id: 1,
      name: "Jay",
    },
    {
      id: 2,
      name: "Reza",
    },
    {
      id: 3,
      name: "Valiallah",
    },
  ]);
  const [number, setNumber] = useState(0);
  console.log(useState());

  const addNumber = () => {
    setNumber(number + 1);
  };
  const addAli = () => {
    setpeople([...people, { id: 4, name: "Ali" }]);
  };
  const [myName, setMyName] = useState("");
  const foo = (e) => {
    setMyName(e.target.value);
  };

  const [inputValue, setInputValue] = useState();

  const [myToDo, setMyToDO] = useState([
    {
      id: 1,
      name: "Exercise",
    },
  ]);
  const addNewTask = (e) => {
    setInputValue(e.target.value);
  };
  const submitNewTask = (e) => {
    e.preventDefault();
    setMyToDO(...myToDo, { id: 2, name: `${inputValue}` });
    setInputValue("");
  };

  return (
    <>
      <h1></h1>
      {/* <Person name={personName} />
      <People items={people} />
      <button onClick={addAli}>Add Ali</button>
      <button onClick={addNumber}>Add number</button>
      <input value={myName} onChange={foo} /> */}
      <ToDoList list={myToDo} />
      <form onSubmit={submitNewTask}>
        <input value={inputValue} onChange={addNewTask} />
        <button type="submit">Submit</button>
      </form>
      <button>Delete</button>
    </>
  );
};

export default Jay;
