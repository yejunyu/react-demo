import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, combineReducers } from "redux";
import no from "./reducers/noteReducer";
import filterReducer from "./reducers/filterReducer";
import App from "./App";
import { Provider } from "react-redux";
import { filterChange } from "./reducers/filterReducer";
import { createNote } from "./reducers/noteReducer";

const reducer = combineReducers({
  notes: no.noteReducer,
  filter: filterReducer,
});

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
