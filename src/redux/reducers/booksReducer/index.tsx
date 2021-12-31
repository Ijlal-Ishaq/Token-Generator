type ActionType = {
  type?: string;
  payload?: any;
};

type BooksType = {
  name: string;
  description: string;
  img: string;
};

type StateType = {
  books: BooksType[] | [];
};

const initState: StateType = {
  books: [],
};

const booksReducer = (
  state: StateType = initState,
  action: ActionType
): StateType => {
  switch (action.type) {
    case "ADD_BOOK": {
      let booksCopy = [...state.books];
      booksCopy.push(action.payload);

      return {
        ...state,
        books: booksCopy,
      };
    }
  }

  return state;
};

export default booksReducer;
