import Header from "./components/layout/header";
import ToDoApp from "./components/Todo/index";

const App = () => {
  return (
    <>
      <Header />
      <ToDoApp title="To DO" />
      <ToDoApp title="Doing" />
    </>
  );
};

export default App;
