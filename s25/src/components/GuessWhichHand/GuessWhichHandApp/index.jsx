import { useState } from "react";
import Container from "../../general/container/index";
import Title from "../Title/index";
import Hand from "../hand/index";
import List from "../List/index";
import { nanoid } from "nanoid";
import Button from "../Button/index";

const GuessWhichHand = ({ name, onAction }) => {
  const [list, setNewList] = useState([]);
  const [ready, setReady] = useState(false);

  const addNewHand = () => {
    setNewList([
      ...list,
      { id: nanoid(), title: <Hand variant="set1">hand</Hand> },
    ]);
  };
  // const onReady = () => {
  //   alert("Hi");
  // };
  // if (!ready) {
  //   return alert("Ready");
  // }

  return (
    <Container variant="shadow">
      <Title title="Guess Which Hand" />
      <List items={list} />
      {/* <Hand>hand</Hand> */}
      {/* <Button name="Start Game" onAction={() => console.log("Hu")} /> */}
      {/* <button onClick={addNewHand}>Add Hands</button> */}
    </Container>
  );
};
export default GuessWhichHand;
