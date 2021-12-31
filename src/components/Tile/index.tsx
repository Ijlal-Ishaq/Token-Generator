import { FC } from "react";
import { styled } from "@mui/material/styles";

type Props = {
  imgUrl: string;
  name: string;
  description: string;
};

const MainDiv = styled("div")(({ theme }) => ({
  width: "300px",
  borderRadius: "15px",
  border: `solid 4px ${theme.palette.primary.main}`,
  padding: "7px",
  paddingBottom: "18px",
  margin: "10px",

  [theme.breakpoints.down("sm")]: {
    width: "90%",
    margin: "auto",
    marginTop: "15px",
  },
}));

const TileImage = styled("img")(({ theme }) => ({
  width: "100%",
  borderRadius: "15px",
  marginBottom: "7px",
}));

const TileName = styled("h1")(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "bold",
  textAlign: "left",
  color: theme.palette.primary.main,
  margin: "0px 10px",
}));

const TileDescription = styled("h1")(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "100",
  textAlign: "left",
  color: theme.palette.primary.main,
  margin: "0px 10px",
  whiteSpace: "initial",
  textOverflow: "ellipsis",
  wordWrap: "break-word",
}));

const index: FC<Props> = ({ imgUrl, name, description }) => {
  return (
    <MainDiv>
      <TileImage src={imgUrl}></TileImage>
      <TileName>{name}</TileName>
      <TileDescription>{description}</TileDescription>
    </MainDiv>
  );
};

export default index;
