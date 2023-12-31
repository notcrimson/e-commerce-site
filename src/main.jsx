import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { productsApi } from "./redux/apiSlice.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ApiProvider api={productsApi}> */}
      <PersistGate loading={"loading"} persistor={persistor}>
        <HashRouter>
          <App />
        </HashRouter>
      </PersistGate>
      {/* </ApiProvider> */}
    </Provider>
  </React.StrictMode>
);
