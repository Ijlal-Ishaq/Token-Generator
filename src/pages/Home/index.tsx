import { FC } from "react";
import { useDispatch, connect, useSelector } from "react-redux";
import { addBook } from "../../redux/actions/booksActions";
import { styled } from "@mui/material/styles";
import { TextField, Box } from "@mui/material";
import Tile from "../../components/Tile";
import { useBookAdder } from "../../hooks/addBook";

type Book = {
  name: string;
  description: string;
  img: string;
};

const MainDiv = styled(Box)(({ theme }) => ({
  width: "100%",
}));

const AddButton = styled("div")(({ theme }) => ({
  height: "70px",
  width: "70px",
  borderRadius: "70px",
  position: "fixed",
  bottom: "20px",
  right: "20px",
  border: "none",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.default,
  fontSize: "48px",
  fontWeight: "100",
}));

const Index: FC = () => {
  const dispatch = useDispatch();
  const addBookFun = useBookAdder();
  const books: Book[] = useSelector((state: any) => {
    return state.booksReducer.books;
  });

  return (
    <MainDiv>
      <AddButton onClick={addBookFun}>+</AddButton>
      <div style={{ display: "flex" }}>
        {books.map((e, i) => {
          console.log("aaa", e);
          return (
            <Tile
              key={i}
              name={e.name}
              description={e.description}
              imgUrl={e.img}
            ></Tile>
          );
        })}
      </div>
    </MainDiv>
  );
};

export default Index;
