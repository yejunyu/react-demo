import React from "react";
import ReactDOM from "react-dom/client";

import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer.noteReducer);

const generateId = () => Number((Math.random() * 1000000).toFixed(0));

const createNote = (content) => {
  console.log(content);
  return {
    type: "NEW_NOTE",
    payload: {
      content: content,
      important: false,
      id: generateId(),
    },
  };
};

const toggleImportanceOf = (id) => {
  return {
    type: "TOGGLE_IMPORTANCE",
    payload: { id },
  };
};

const App = () => {
  const addNote = (event) => {
    event.preventDefault();
    const content = event.target.querySelector("input").value;
    event.target.querySelector("input").value = "";
    store.dispatch(createNote(content));
  };

  const toggleImportance = (id) => {
    store.dispatch(toggleImportanceOf(id));
  };

  return (
    <div>
      <form onSubmit={addNote}>
        <input type="text" />
        <button type="submit">add</button>
      </form>
      <ul>
        {store.getState().map((note) =>
          note && note.id ? (
            <li key={note.id}>
              <button onClick={() => toggleImportance(note.id)}>
                {note.important ? "make not important" : "make important"}
              </button>
              {note.content}{" "}
              <strong>{note.important ? "important" : ""}</strong>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => {
  root.render(<App />);
};

renderApp();
store.subscribe(renderApp);
