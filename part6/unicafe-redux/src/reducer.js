const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
};

const counterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "GOOD":
      state.good += 1;
      return state;
    case "OK":
      state.ok += 1;
      return state;
    case "BAD":
      state.bad += 1;
      return state;
    case "ZERO":
      state.good = 0;
      state.ok = 0;
      state.bad = 0;
      return state;
    default:
      return state;
  }
};

const generateId = () => Number((Math.random() * 1000000).toFixed(0));

export const createNote = (content) => {
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

export const toggleImportanceOf = (id) => {
  return {
    type: "TOGGLE_IMPORTANCE",
    payload: { id },
  };
};

const noteReducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case "NEW_NOTE":
      return [...state, action.payload];
    case "TOGGLE_IMPORTANCE":
      const id = action.payload.id;
      const noteToChange = state.find((n) => n.id === id);
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      };
      return state.map((note) => (note.id !== id ? note : changedNote));
    default:
      return state;
  }
};

export default { noteReducer, counterReducer };
