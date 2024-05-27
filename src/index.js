import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Root = () => (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

root.render(<Root />);
