import { useState, useRef } from "react";

function Ref() {
  let x = 0; // local variable

  const [y, setY] = useState(0); // State Variables

  const z = useRef(0); // Reference Variable

  console.log(z);

  function handleX() {
    x = x + 1;
    console.log(x);
  }

  function handleY() {
    setY(y + 1);
  }

  function handleZ() {
    z.current = z.current + 1;
    console.log(z.current);
  }

  return (
    <div className="w-96 h-96 border border-red-500">
      <h1 className="m-5">X : {x}</h1>

      <button className="border m-5 border-black" onClick={() => handleX()}>
        Increase X
      </button>

      <h1 className="m-5">Y : {y}</h1>

      <button className="border m-5 border-black" onClick={() => handleY()}>
        Increase Y
      </button>

      <h1 className="m-5">Z : {z.current}</h1>

      <button className="border m-5 border-black" onClick={() => handleZ()}>
        Increase Z
      </button>
    </div>
  );
}

export default Ref;
