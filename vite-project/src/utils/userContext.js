import { createContext } from "react";

const userContext = createContext({
  loggedInUser: "Anshika Agarwal",
  printName: function () {
    console.log("Function Inside Context");
  },
});

export default userContext;
