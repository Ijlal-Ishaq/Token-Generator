import { FC } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/index";
import { Provider } from "react-redux";
import MuiTheme from "./theme";
import { styled } from "@mui/material/styles";

const App: FC = () => {
  return (
    <div className="App">
      <MuiTheme>
        <div className="background">
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </div>
      </MuiTheme>
    </div>
  );
};

export default App;
