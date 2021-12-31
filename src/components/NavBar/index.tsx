import { FC } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";

const MainDiv = styled("div")(({ theme }) => ({
  width: "100%",
  height: "70px",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
}));

const LinkTab = styled("div")(({ theme }) => ({}));

const Index: FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <MainDiv>
      <LinkTab
        onClick={() => navigate("/home")}
        style={{ color: theme.palette.background.default }}
      >
        Books
      </LinkTab>
      <LinkTab
        onClick={() => navigate("/articles")}
        style={{ color: theme.palette.background.default }}
      >
        Articles
      </LinkTab>
      <LinkTab
        onClick={() => navigate("/contact")}
        style={{ color: theme.palette.background.default }}
      >
        Contact Us
      </LinkTab>
    </MainDiv>
  );
};

export default Index;
