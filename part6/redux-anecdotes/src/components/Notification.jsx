import { useSelector, useDispatch } from "react-redux";
import { vote, createAnecdote } from "../reducers/anecdoteReducer";

const Notification = () => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return <div style={style}>render here notification...</div>;
};

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const newAnecdote = (e) => {
    e.preventDefault();
    const anecdote = e.target.anecdote.value;
    e.target.anecdote.value = "";
    dispatch(createAnecdote(anecdote));
  };
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

const Anecdote = ({ anecdote, clickHandler }) => {
  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={clickHandler}>vote</button>
      </div>
    </div>
  );
};
const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      {[...anecdotes]
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            clickHandler={() => dispatch(vote(anecdote.id))}
          />
        ))}
    </div>
  );
};

export default {
  Notification,
  AnecdoteForm,
  AnecdoteList,
};
