import { FC } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";

const Index: FC = () => {
  return useRoutes([
    {
      path: "/",
      children: [
        {
          path: "",
          element: <Navigate to={"/home"} />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);
};

export default Index;
