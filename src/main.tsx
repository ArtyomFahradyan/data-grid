import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./@redux/configureStore";
import App from "./App";

const { store } = configureStore();

function Main() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

export default Main;
