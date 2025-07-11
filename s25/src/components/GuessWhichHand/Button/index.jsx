import { nanoid } from "nanoid";
import Hand from "../hand/index";
import { useState } from "react";
const Button = ({ name, onAction }) => {
  const [hand, setNewHand] = useState("");
  const addNewHand = () => {
    setNewHand({ id: nanoid(), title: <Hand variant="set1">hand</Hand> });
  };

  return (
    <>
      <button value={hand} onClick={onAction}>
        {name}
      </button>
    </>
  );
};

export default Button;
// const addNewHand = () => {
//     setNewList([
//       ...list,
//       {
//         id: nanoid(),
//         title: <Hand variant="set1">hand</Hand>,
//       },
//     ]);
//   };
