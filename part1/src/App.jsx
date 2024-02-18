import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [voteArr, setVoteArr] = useState(Array.from({ length: 10 }, () => 0));
  const [mostVoted, setMostVoted] = useState(anecdotes[0]);

  const findMaxNumber = (arr) => {
    const maxNumber = Math.max(...arr);
    return arr.indexOf(maxNumber);
  };

  const voteHandler = (params) => {
    const copy = [...voteArr];
    copy[selected] += 1;
    setVoteArr(copy);
    const mostVotedAnecdotes = anecdotes[findMaxNumber(copy)];
    console.log(mostVotedAnecdotes);
    setMostVoted(mostVotedAnecdotes);
  };

  return (
    <div>
      {anecdotes[selected]}
      <div>has {voteArr[selected]} votes</div>
      <br />
      <button onClick={voteHandler}>vote</button>
      <button
        onClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
      >
        next
      </button>
      <h1>most voted</h1>
      <span>{mostVoted}</span>
    </div>
  );
};

export default App;
