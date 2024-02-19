import { useState } from "react";
import PersonForm from "./components/form/form-component";
import Persons from "./components/person/person-component";
import Filter from "./components/filter/filter-component";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "123123" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterPersons, setFilterPersons] = useState([...persons]);

  console.log(filterPersons);
  const handleInputChange = (e) => {
    const value = e.target.value;
    setNewName(value);
  };
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setNewPhone(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (persons.some((p) => p.name == newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newObj = {
      name: newName,
      phone: newPhone,
    };
    setPersons(persons.concat(newObj));
    setFilterPersons(filterPersons.concat(newObj));
  };
  const handleSearch = (e) => {
    const compareNames = persons.filter((p) => p.name.includes(e.target.value));
    setFilterPersons(compareNames);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        handlePhoneChange={handlePhoneChange}
      />
      <h3>Numbers</h3>
      <Persons persons={filterPersons} />
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
