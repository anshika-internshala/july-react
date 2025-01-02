import { useState } from "react";

function CounterExample() {
  const [a, setA] = useState(0);

  return (
    <div className="w-52 h-52 border-black m-8">
      <p>a : {a}</p>
      <button className="border bg-slate-100" onClick={() => setA(a + 1)}>
        Update A
      </button>
    </div>
  );
}

export default CounterExample;

// React Routing
