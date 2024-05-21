import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import initialState from "./store/initialState";
import rootReducer from "./reducers";
import { legacy_createStore as createStore } from "redux";

const store = createStore(rootReducer, initialState);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
reportWebVitals();
