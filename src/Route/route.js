import { createBrowserRouter, Link } from "react-router-dom";
import About from "../Pages/About/About";
import Cart from "../Pages/cart/Cart";
import Home from "../Pages/Home/Home";
import Main from "../Pages/layout/Main";
import TopRate from "../Pages/TopRate/TopRate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "top-rated",
        element: <TopRate />,
      },
    ],
  },
]);
