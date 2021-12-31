import * as types from "../../types";

type Book = {
  name: string;
  description: string;
  img: string;
};

export const addBook = (Book: Book) => {
  return {
    type: types.ADD_BOOK,
    payload: Book,
  };
};
