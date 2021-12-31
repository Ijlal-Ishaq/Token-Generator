import { useDispatch } from "react-redux";
import { addBook } from "../../redux/actions/booksActions";

type Book = {
  name: string;
  description: string;
  img: string;
};

export const useBookAdder = () => {
  let dispatch = useDispatch();
  const addBookFun = () => {
    let name = prompt("Enter Name");
    let des = prompt("Enter Description");
    let img = prompt("Enter Image Url");
    if (name && des && img) {
      let book: Book = {
        name: name,
        description: des,
        img: img,
      };
      dispatch(addBook(book));
    } else {
      alert("Enter All Information");
    }
  };

  return addBookFun;
};
