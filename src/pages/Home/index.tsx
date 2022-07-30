/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable eqeqeq */
import { FC, useState } from "react";
import { styled } from "@mui/material/styles";
import { useWeb3React } from "@web3-react/core";
import { deploy } from "../../utils/deploy";
// import { conciseAddress } from "../../utils/formattingFunctions";

const Container = styled("div")(({ theme }) => ({
  marginTop: "100px",
  marginLeft: "auto",
  marginRight: "auto",
  background: "rgba(255, 255, 255, 0.03)",
  boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
  backdropFilter: "blur(30px)",
  borderRadius: "5px",
  width: "700px",
  height: "590px",
  display: "flex",
  flexDirection: "column",
  padding: "30px 130px",
  justifyContent: "center",
  left: 0,
  right: 0,

  [theme.breakpoints.down("sm")]: {
    width: "90%",
    marginTop: "100px",
    padding: "30px",
  },
}));

const Input = styled("input")(({ theme }) => ({
  background: "rgba(255, 255, 255, 1)",
  boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
  backdropFilter: "blur(30px)",
  borderRadius: "5px",
  border: "none",
  padding: "13px",
  fontSize: "18px",
  fontFamily: "Josefin Sans",
  marginBottom: "10px",
}));

const Home: FC = () => {
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [supply, setSupply] = useState<any>("");
  const [decimals, setDecimals] = useState<any>("");
  const [address, setAddress] = useState("");
  const [deployingState, setDeployingState] = useState(false);
  const [deployedState, setDeployedState] = useState(false);
  const [verifyState, setverifyState] = useState(false);

  const webContext = useWeb3React();

  const generateToken = async () => {
    if (
      tokenName !== "" &&
      tokenSymbol !== "" &&
      supply !== "" &&
      !isNaN(supply)
    ) {
      setDeployingState(true);
      let address = await deploy(
        tokenName,
        tokenSymbol,
        supply,
        decimals,
        webContext,
        setverifyState
      );
      setAddress(address);
      setDeployedState(true);
      setDeployingState(false);
      setTokenName("");
      setTokenSymbol("");
      setSupply("");
    }
  };

  return (
    <>
      {deployingState ? (
        <Container>
          <div
            style={{
              fontSize: "25px",
              fontWeight: "500",
              color: "#fff",
              fontFamily: "Josefin Sans",
              marginBottom: "15px",
              userSelect: "none",
            }}
          >
            Deploying Your Token.....
          </div>
        </Container>
      ) : verifyState ? (
        <Container>
          <div
            style={{
              fontSize: "25px",
              fontWeight: "500",
              color: "#fff",
              fontFamily: "Josefin Sans",
              marginBottom: "15px",
              userSelect: "none",
            }}
          >
            Verifying Your Token.....
          </div>
        </Container>
      ) : deployedState ? (
        <Container>
          <div
            style={{
              fontSize: "25px",
              color: "#fff",
              fontFamily: "Josefin Sans",
              margin: "10px",
              userSelect: "none",
              wordBreak: "break-all",
              fontWeight: "light",
            }}
          >
            Your Token Address <br />
            <div
              style={{
                fontSize: "20px",
                userSelect: "all",
                textDecoration: "none",
                marginBottom: "10px",
                color: "#fff",
              }}
            >
              {address}
            </div>
            <button
              onClick={() => {
                setDeployedState(false);
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
              NEXT
            </button>
          </div>
        </Container>
      ) : (
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
              fontWeight: "700",
              textAlign: "left",
              color: "#fff",
              fontFamily: "Josefin Sans",
              userSelect: "none",
            }}
          >
            Token Name :
          </div>
          <Input
            type={"text"}
            name="tokenName"
            placeholder="Enter token name"
            value={tokenName}
            onChange={(e) => {
              setTokenName(e.target.value);
            }}
          ></Input>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "700",
              textAlign: "left",
              color: "#fff",
              fontFamily: "Josefin Sans",
              userSelect: "none",
            }}
          >
            Token Symbol :
          </div>
          <Input
            type={"text"}
            name="tokenSymbol"
            placeholder="Enter token symbol"
            value={tokenSymbol}
            onChange={(e) => {
              setTokenSymbol(e.target.value);
            }}
          ></Input>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "700",
              textAlign: "left",
              color: "#fff",
              fontFamily: "Josefin Sans",
              userSelect: "none",
            }}
          >
            Initial Supply :
          </div>
          <Input
            type={"number"}
            min={0}
            name="initialSupply"
            placeholder="Enter initial supply"
            value={supply}
            onChange={(e) => {
              setSupply(parseInt(e.target.value));
            }}
          ></Input>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "700",
              textAlign: "left",
              color: "#fff",
              fontFamily: "Josefin Sans",
              userSelect: "none",
            }}
          >
            Decimals :
          </div>
          <Input
            type={"number"}
            min={0}
            name="initialSupply"
            placeholder="Enter decimals"
            value={decimals}
            onChange={(e) => {
              setDecimals(parseInt(e.target.value));
            }}
          ></Input>
          <br />
          <button
            onClick={() => {
              generateToken();
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
            Generate Token
          </button>
        </Container>
      )}
    </>
  );
};

export default Home;
