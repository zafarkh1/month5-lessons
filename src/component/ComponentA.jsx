import { useState } from "react";

import ComponentB from "./ComponentB";

import "./component.scss";

const ComponentA = () => {
  const name = "Zafar";

  // const [car, setCar] = useState("BMW")
  // setCar("Tesla")

  const [count, setCount] = useState(0);

  const handleCount = () => {
    return setCount(count + 1);
  };

  const handleCountMinus = () => {
    return setCount(count - 1);
  };

  const [color, setColor] = useState(false);

  const changeColor = () => {
    return setColor(!color);
  };

  return (
    <>
      <div>Count {count}</div>
      <button onClick={handleCount}>+</button>
      <button onClick={handleCountMinus}>-</button>
      <ComponentB ism={name} />

      <p className={`text ${color ? "ajax" : ""}`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
        expedita nulla praesentium similique dolores voluptatum vero, labore
        perspiciatis corrupti omnis iste, sapiente, est dicta! At libero iure
        exercitationem ex a, praesentium totam inventore mollitia itaque in
        reiciendis modi vel excepturi illo! Velit ratione quasi sunt rerum error
        in saepe blanditiis.
      </p>
      <button onClick={changeColor} className="change-color">
        Generate
      </button>
    </>
  );
};

export default ComponentA;
