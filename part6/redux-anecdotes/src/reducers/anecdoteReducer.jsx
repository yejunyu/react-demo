const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

export const createAnecdote = (anecdote) => {
  return {
    type: "NEW_ANECDOTE",
    data: newObj(anecdote),
  };
};

const newObj = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

export const vote = (id) => {
  return {
    type: "VOTE",
    data: { id },
  };
};

const initialState = anecdotesAtStart.map(newObj);

const reducer = (state = initialState, action) => {
  if (action.type === "VOTE") {
    const id = action.data.id;
    const anecdoteToChange = state.find((n) => n.id === id);
    const changedAnecdote = {
      ...anecdoteToChange,
      votes: anecdoteToChange.votes + 1,
    };
    return state.map((anecdote) =>
      anecdote.id !== id ? anecdote : changedAnecdote
    );
  }
  if (action.type === "NEW_ANECDOTE") {
    return [...state, action.data];
  }
  return state;
};

export default reducer;
