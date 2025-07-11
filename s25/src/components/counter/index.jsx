import Header from "../layout/header";
import { useEffect, useMemo, useState } from "react";

const CounterApp = () => {
  const Counter = () => {
    const [count, setCount] = useState(0);
    return (
      <>
        <button onClick={() => setCount(count + 1)}>Incerement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        {!!count && <Board number={count} />}
      </>
    );
  };

  const Board = ({ number }) => {
    // const [power, setpower] = useState(0);
    useEffect(() => {
      console.log("board component mounted");
      const timout = setTimeout(() => {
        alert("Welcoem to Our Website");
      }, 10000);
      return () => {
        clearTimeout(timout);
      };
    }, []);
    const power = useMemo(() => {
      return Math.pow(2, number);
    }, [number]);

    return (
      <div>
        2 to the power of {number} = {power}
      </div>
    );
  };
  return (
    <>
      <Counter />
      <Header />
    </>
  );
};

export default CounterApp;
