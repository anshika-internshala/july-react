import { findPrime } from "../utils/helper.js";
import { useState, useMemo } from "react";

function Memo() {
  const [number, setNumber] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const nthPrime = useMemo(() => findPrime(number), [number]);
  return (
    <>
      <h1>Understanding useMemo Hook</h1>

      <div
        className="w-72 h-72 border border-blue-500 m-5"
        style={
          isDarkTheme
            ? { backgroundColor: "lightgray" }
            : { backgroundColor: "white" }
        }
      >
        <input
          type="number"
          className="border m-2"
          onChange={(e) => setNumber(e.target.value)}
        />

        <h2 className="font-bold m-5">nth Prime Number is: {nthPrime}</h2>

        <button
          className="border bg-slate-50 m-5"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle Theme
        </button>
      </div>
    </>
  );
}

export default Memo;

// nth prime number
