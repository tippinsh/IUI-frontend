import * as React from "react";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Report from "./pages/Report";
import Survey from "./pages/Survey";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import Help from "./pages/Help";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/report",
    element: <Report />,
  },
  {
    path: "/survey",
    element: <Survey />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/help_now",
    element: <Help />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
