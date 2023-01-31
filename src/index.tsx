import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";

import store from "./services/store";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);