import Course from "./components/course/course";
import { useState } from "react";

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  const [notes, setNotes] = useState(courses);
  const [newNote, setNewNote] = useState("a new note");
  const [showAll, setShowAll] = useState(true);

  const addNote = (e) => {
    e.preventDefault();
    const copy = [...notes];
    const noteObj = {
      name: newNote,
      exercises: Math.floor(Math.random() * 10),
      id: new Date().getTime(),
    };
    copy[1].parts.push(noteObj);
    console.log(noteObj);
    console.log(copy);
    setNotes(copy);
    setNewNote("");
  };

  const handleNoteChange = (e) => {
    console.log(e.target);
    setNewNote(e.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter((n) => n.id < 2);

  return (
    <div>
      <h1>Web development curriculum</h1>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? "important" : "all"}
      </button>
      {notesToShow.map((c) => (
        <Course key={c.id} course={c} />
      ))}
      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
        {newNote}
      </form>
    </div>
  );
};

export default App;
