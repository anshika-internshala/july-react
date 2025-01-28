import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const [userName, setUserName] = useState("John Cena");
  return (
    <div className="h-screen">
      <Provider store={appStore}>
        <Header />
        <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Outlet />
          <Footer />
        </userContext.Provider>
      </Provider>
    </div>
  );
}

export default App;

// Functional Components --- new way
// Class Based Components --- old way
