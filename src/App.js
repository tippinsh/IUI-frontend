import * as React from "react";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Report from "./pages/Report";
import Survey from "./pages/Survey";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
