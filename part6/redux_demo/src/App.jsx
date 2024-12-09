import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createStore } from "redux";

const noteReducer = (state = [], action) => {
  if (action.type === "NEW") {
    return state.concat(action.payload);
  }
  return state;
};

const store = createStore(noteReducer);

store.dispatch({
  type: "NEW",
  payload: {
    title: "Hello World",
    content: "Hello World",
    important: true,
  },
});
store.dispatch({
  type: "NEW",
  payload: {
    title: "react",
    content: "react",
    important: false,
  },
});

const fun1 = () => {
  console.log("fun1");
  store.dispatch({
    type: "NEW",
    payload: {
      title: "fun1",
      content: "fun1",
      important: false,
    },
  });
};

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ul>
          {store.getState().map((state) => {
            console.log(state);
            return (
              <li key={state.title}>
                {state.content}
                <strong>{state.important ? "important" : ""}</strong>
              </li>
            );
          })}
        </ul>
        <button onClick={fun1}>点我</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
