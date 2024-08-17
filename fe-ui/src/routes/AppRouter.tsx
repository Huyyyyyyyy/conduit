import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "../layout/Layout";
import { HomeRouter } from "./HomeRouter";
import { LoginRouter } from "./LoginRouter";
import { RegisterRouter } from "./RegisterRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={"/home"} />,
      },
      HomeRouter,
      LoginRouter,
      RegisterRouter,
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRouter;
