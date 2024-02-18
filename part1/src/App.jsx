import { useState } from "react";

const Display = ({ counter }) => {
  return <div>{counter}</div>;
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = (props) => {
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter...", counter);
  const increaseByOne = () => {
    console.log("increase with counter...", counter);
    setCounter(counter + 1);
  };
  const zetToZero = () => {
    console.log("zero with counter...", counter);
    setCounter(0);
  };

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus"></Button>
      <Button onClick={zetToZero} text="zero"></Button>
    </div>
  );
};

export default App;
