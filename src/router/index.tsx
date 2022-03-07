import { FC } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import ConnectWallet from "../pages/ConnectWallet";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import { useWeb3React } from "@web3-react/core";

const WalletConnectedRoutes = () => {
  return useRoutes([
    {
      path: "/",
      children: [
        {
          path: "",
          element: <Navigate to={"/home"} />,
        },
        {
          path: "connectWallet",
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

const WalletNotConnectedRoutes = () => {
  return useRoutes([
    {
      path: "connectWallet",
      element: <ConnectWallet />,
    },
    {
      path: "*",
      element: <Navigate to={"/connectWallet"} />,
    },
  ]);
};

const Index: FC = () => {
  const { active } = useWeb3React();
  return active ? WalletConnectedRoutes() : WalletNotConnectedRoutes();
};

export default Index;
