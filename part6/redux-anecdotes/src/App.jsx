import Notification from "./components/Notification";

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification.AnecdoteList />
      <Notification.AnecdoteForm />
    </div>
  );
};

export default App;
