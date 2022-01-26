import { FC } from "react";
import { useDispatch, connect, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import { TextField, Box } from "@mui/material";

const MainDiv = styled("div")(({ theme }) => ({
  marginLeft: "auto",
  marginRight: "auto",
}));

const Logo = styled("div")(({ theme }) => ({
  marginLeft: "auto",
  marginRight: "auto",
  fontSize: "30px",
  marginTop: "90px",
  marginBottom: "50px",
}));

const CustomButtons = styled("div")(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.1)",
  boxShadow: "0 0 8px 3px rgba(255, 255, 255, 0.09)",
  backdropFilter: "blur(4px)",
  borderRadius: "5px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  width: "300px",
  height: "50px",
  color: "#fff",
  marginTop: "30px",
  marginLeft: "auto",
  marginRight: "auto",
  userSelect: "none",

  "&:hover": {
    width: "310px",
    height: "60px",
  },
}));

const Index: FC = () => {
  return (
    <MainDiv>
      <Logo>Logo</Logo>
      <CustomButtons>PLAY</CustomButtons>
      <CustomButtons>Collection</CustomButtons>
      <CustomButtons>HOW IT WORKS?</CustomButtons>
    </MainDiv>
  );
};

export default Index;
