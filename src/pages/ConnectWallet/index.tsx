import { FC } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import { injected } from "../../utils/connector";
import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from "@web3-react/frame-connector";

const Container = styled("div")(({ theme }) => ({
  marginTop: "50vh",
  marginBottom: "15px",
  marginLeft: "auto",
  marginRight: "auto",
  background: "rgba(255, 255, 255, 0.03)",
  boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
  backdropFilter: "blur(30px)",
  borderRadius: "5px",
  width: "700px",
  height: "500px",
  transform: "translateY(-250px)",
  display: "flex",
  flexDirection: "column",
  padding: "30px 130px",
  position: "fixed",
  justifyContent: "center",
  left: 0,
  right: 0,

  [theme.breakpoints.down("sm")]: {
    width: "90%",
    marginTop: "45vh",
    padding: "30px",
  },
}));

const Index: FC = () => {
  const { activate } = useWeb3React();
  const navigate = useNavigate();

  const getErrorMessage = (error: any) => {
    if (error instanceof NoEthereumProviderError) {
      return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
    } else if (error instanceof UnsupportedChainIdError) {
      return "You're connected to an unsupported network.";
    } else if (
      error instanceof UserRejectedRequestErrorInjected ||
      error instanceof UserRejectedRequestErrorFrame
    ) {
      return "Please authorize this website to access your Ethereum account.";
    } else {
      return "An unknown error occurred. Check the console for more details.";
    }
  };

  const activateWallet = async () => {
    try {
      await activate(injected);
      navigate("/home");
    } catch (e: any) {
      if (e.message !== "The user rejected the request.") {
        const err = getErrorMessage(e);
        console.log(err);
      } else {
        console.log("You rejected the wallet connection request.");
      }
    }
  };

  return (
    <Container>
      <div
        style={{
          fontSize: "30px",
          fontWeight: "700",
          color: "#fff",
          fontFamily: "Josefin Sans",
          marginBottom: "15px",
          userSelect: "none",
        }}
      >
        Generate Token
      </div>
      <div
        style={{
          fontSize: "18px",
          fontWeight: "500",
          color: "#fff",
          fontFamily: "Josefin Sans",
          marginBottom: "15px",
          userSelect: "none",
        }}
      >
        Connect metamask and make sure you are on 'Rinkeby' network.
      </div>
      <br />
      <button
        onClick={() => {
          activateWallet();
        }}
        style={{
          borderRadius: "5px",
          border: "none",
          padding: "13px",
          fontFamily: "Josefin Sans",
          fontSize: "18px",
          fontWeight: "700",
          color: "#fff",
          boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
          background:
            "linear-gradient(150deg,rgba(41, 200, 105, 1) 0%, rgba(41, 200, 105, 1) 30%, rgba(30, 148, 231, 1) 100%)",
          cursor: "pointer",
        }}
      >
        CONNECT METAMASK
      </button>
    </Container>
  );
};

export default Index;
