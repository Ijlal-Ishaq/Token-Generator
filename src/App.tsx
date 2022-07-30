import { FC, useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/index";
import MuiTheme from "./theme";
import { styled } from "@mui/material/styles";
import { conciseWalletAddress } from "./utils/formattingFunctions";
import { ClickAwayListener } from "@mui/base";
import { useWeb3React } from "@web3-react/core";

const WalletAddressButton = styled("div")<{ disconnect?: boolean }>(
  ({ theme, disconnect }) => ({
    background: disconnect
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(255, 255, 255, 0.03)",
    boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
    backdropFilter: "blur(4px)",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    padding: "10px 20px",
    color: "rgba(255,255,255,0.7)",
    fontSize: "15px",
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    position: "fixed",
    right: "15px",
    top: disconnect ? "65px" : "15px",
    width: "170px",
    zIndex: "100",
    userSelect: "none",
    "&:hover": {
      background: disconnect
        ? "rgba(255, 255, 255, 0.3)"
        : "rgba(255, 255, 255, 0.1)",
    },
  })
);

const App: FC = () => {
  const { account, deactivate } = useWeb3React();

  const [showDisconnectButton, setShowDisconnectButton] =
    useState<boolean>(false);

  const disconnectWallet = async () => {
    setShowDisconnectButton(false);
    deactivate();
  };

  const getWalletButton = (account: any) => {
    return (
      <>
        <WalletAddressButton
          onClick={() => {
            setShowDisconnectButton(!showDisconnectButton);
          }}
        >
          {conciseWalletAddress(account)}
        </WalletAddressButton>
        {showDisconnectButton ? (
          <ClickAwayListener
            onClickAway={() => {
              setShowDisconnectButton(false);
            }}
          >
            <WalletAddressButton
              disconnect={true}
              onClick={() => {
                disconnectWallet();
              }}
            >
              Disconnect
            </WalletAddressButton>
          </ClickAwayListener>
        ) : null}
      </>
    );
  };

  return (
    <div className="App">
      <div className="background-circle-1" />
      <div className="background-circle-2" />
      <MuiTheme>
        {account && getWalletButton(account)}
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </MuiTheme>
    </div>
  );
};

export default App;
