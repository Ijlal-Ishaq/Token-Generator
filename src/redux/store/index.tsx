import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import booksReducer from "../reducers/booksReducer";
import themeReducer from "../reducers/themeReducer";

// ***Redux with persistance
const persistConfig = {
  key: "Logshahah",
  storage: storage,
  // whitelist: ["themeReducer"],
};

const Reducer = persistReducer(
  persistConfig,
  combineReducers({ booksReducer, themeReducer })
);

// ***Redux without persistance
// const Reducer = combineReducers({ booksReducer, articlesReducer });

//******************************************************************************************

// ***For Development:
const middleware = applyMiddleware(thunk, logger);
const store = createStore(Reducer, middleware);

// ***For Production:
// const store = createStore(Reducer);

const persistor = persistStore(store);

export { persistor, store };
