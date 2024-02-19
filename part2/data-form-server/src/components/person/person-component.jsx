import node from "../../services/node";

const Persons = ({ persons, handleDel }) => {
  return (
    <ul>
      {persons.map((p) => (
        <li key={p.name}>
          {p.name} - {p.phone}{" "}
          <button onClick={() => handleDel(p.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
