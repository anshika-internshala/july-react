import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();

  return (
    <>
      <h1>Error Component</h1>
      <h1>Error Message: {err.data}</h1>
      <h1>Error Status: {err.status}</h1>
    </>
  );
}

export default Error;
