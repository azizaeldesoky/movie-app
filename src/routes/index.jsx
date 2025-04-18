import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Details from "../pages/Details";
import Search from "../pages/Search";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":explore",
        element: <Explore />,
      },
      {
        path: ":explore/:id",
        element: <Details />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);
export default router;
