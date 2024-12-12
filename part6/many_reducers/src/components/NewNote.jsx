import { useDispatch } from "react-redux";
import { createNote } from "../reducers/noteReducer";

const NewNote = () => {
  const dispatch = useDispatch();
  const addNote = (event) => {
    event.preventDefault();
    const content = event.target.querySelector("input").value;
    event.target.querySelector("input").value = "";
    dispatch(createNote(content));
  };

  return (
    <div>
      <form onSubmit={addNote}>
        <input type="text" />
        <button type="submit">add</button>
      </form>
    </div>
  );
};
export default NewNote;
