import { useState } from "react";
import Container from "../../general/container/index";
import Title from "../Title/index";
import Hand from "../hand/index";
import List from "../List/index";
import { nanoid } from "nanoid";
import Button from "../Button/index";

const GuessWhichHand = () => {
  const [list, setNewList] = useState([]);

  const addNewHand = () => {
    setNewList([
      ...list,
      { id: nanoid(), title: <Hand variant="set1">hand</Hand> },
    ]);
  };

  return (
    <Container variant="shadow">
      <Title title="Guess Which Hand" />
      <List items={list} />
      {/* <Hand>hand</Hand> */}
      <Button />
      <button onClick={addNewHand}>Add Hands</button>
    </Container>
  );
};
export default GuessWhichHand;
