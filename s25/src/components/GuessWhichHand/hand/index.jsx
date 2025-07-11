import { useEffect, useState } from "react";
import closedHand from "../../../assets/images/Closed Hand.png";
import openPrizeHand from "../../../assets/images/Open Hand.png";
import openEmptyHand from "../../../assets/images/OpenEmptyHand.png";

const Hand = () => {
  const [show, setShow] = useState(true);

  // const randNum = console.log("randomNuber", randNum);
  const [randNum, setRandNum] = useState(0);
  const createRandNum = () => {
    const result = Math.floor(Math.random() * 10) + 1;
    setRandNum(result);
  };
  useEffect(() => {
    console.log("randNum updated:", randNum);
  }, [randNum]);
  console.log(randNum);
  // const randNum = 8;
  const [score, setScore] = useState(0);
  const refreshClosedHand1 = () => {
    setShow(false);

    const isEven = randNum % 2 === 0;
    console.log("is even?", isEven);

    const newScore = isEven ? score + 1 : score - 1;
    setScore(newScore);
    console.log("Next score (after update):", newScore);
  };
  const refreshClosedHand2 = () => {
    setShow(false);

    console.log("score", score);
  };
  const refreshOpenEmptyHand = () => {
    setShow(true);
  };
  const refreshOpenHand = () => {
    setShow(true);
  };

  // const refreshOpenHands = () => {
  //   const randNum = Math.floor(Math.random() * 10) + 1;
  //   console.log(randNum);
  //   if (randNum % 2 === 0) {
  //     setShow(false);
  //   } else {
  //     setShow(true);
  //   }
  //   console.log(randNum);

  //   setShow(false);
  // };

  return (
    <div>
      <div>
        <img
          src={closedHand}
          className={`Hand--${show ? "display-on" : "display-off"}`}
          alt="_"
          onClick={() => {
            createRandNum();
            refreshClosedHand1();
          }}
        />
        <img
          src={closedHand}
          className={`Hand--${show ? "display-on" : "display-off"}`}
          alt="_"
          onClick={() => {
            refreshClosedHand2();
            createRandNum();
          }}
        />
      </div>
      {randNum % 2 === 0 ? (
        <div>
          {/* {console.log("even")} */}

          <img
            src={openPrizeHand}
            className={`Hand--${show ? "display-off" : "display-on"}`}
            alt="_"
            onClick={refreshOpenHand}
          />
          <img
            src={openEmptyHand}
            className={`Hand--${show ? "display-off" : "display-on"}`}
            alt="_"
            onClick={refreshOpenEmptyHand}
          />
        </div>
      ) : (
        <div>
          {/* {console.log("Odd")} */}
          <img
            src={openEmptyHand}
            className={`Hand--${show ? "display-off" : "display-on"}`}
            alt="_"
            onClick={refreshOpenEmptyHand}
          />
          <img
            src={openPrizeHand}
            className={`Hand--${show ? "display-off" : "display-on"}`}
            alt="_"
            onClick={refreshOpenHand}
          />
        </div>
      )}
    </div>
  );
};

export default Hand;
