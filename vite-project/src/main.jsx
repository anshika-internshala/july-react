import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./components/Search.jsx";
import SignIn from "./components/SignIn.jsx";
import RestaurantDetails from "./components/RestaurantDetails.jsx";
import Body from "./components/Body.jsx";
import Error from "./components/Error.jsx";
import Memo from "./components/Memo.jsx";
import Ref from "./components/Ref.jsx";
import Cart from "./components/Cart.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
      {
        path: "/memo",
        element: <Memo />,
      },
      {
        path: "/ref",
        element: <Ref />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);

// Routing -----> navigating from one link to another
// Single Page Application -----> Application will render only one web document and based on your links(routes) , you will render different different components
// Client Side Routing ----> no server is involved
// React Router ----> install npm package (react-router-dom)
// createBrowserRouter ----> recommended router
// RouterProvider ----> helps us provide router to our application
