import { useState, useEffect } from "react";
function Search(props) {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);

  useEffect(() => {
    console.log("Componet is updated");

    return () => {
      console.log("Functional component unmounted");
    };
  }, [count]);

  function updateCount() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>Search Component</h1>
      <h2>{props.name}</h2>
      <h3>{count}</h3>
      <h3>{count1}</h3>
      <button className="bg-slate-100" onClick={updateCount}>
        Update
      </button>
    </>
  );
}

export default Search;

// Seaparation of concerns ----> keep your one file short
