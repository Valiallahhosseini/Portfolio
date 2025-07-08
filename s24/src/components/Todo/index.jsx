import Title from "../general/title/index";
import Card from "../general/title/card/index";
import Form from "../Todo/form";
import List from "../Todo/list";

import { useState } from "react";

const ToDoApp = ({ title }) => {
  const [list, setList] = useState([]);
  const onDeleteTask = (id) => {
    setList(list.filter((item) => item.id !== id));
    console.log(list);
  };

  return (
    <>
      <Card variant="shadow">
        <Title text={title} />
        <List items={list} onDeleteTask={onDeleteTask} />
        <Form onTaskSubmit={(task) => setList([...list, task])} />
      </Card>
    </>
  );
};
export default ToDoApp;
