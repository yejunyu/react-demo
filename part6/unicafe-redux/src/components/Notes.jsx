import { useSelector, useDispatch } from "react-redux";
import { toggleImportanceOf } from "../reducer";

const Note = ({ note, clickHandler }) => {
  return (
    <li onClick={clickHandler}>
      {note.content}
      <strong>{note.important ? "important" : ""}</strong>
    </li>
  );
};

const Notes = () => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          clickHandler={() => dispatch(toggleImportanceOf(note.id))}
        />
      ))}
    </ul>
  );
};

export default Notes;
