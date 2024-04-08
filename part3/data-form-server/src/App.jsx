import { useState, useEffect } from "react";
import PersonForm from "./components/form/form-component";
import Persons from "./components/person/person-component";
import Filter from "./components/filter/filter-component";
import node from "./services/node";
import Notify from "./components/notifyMsg/notify-component";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterPersons, setFilterPersons] = useState([]);
  const [msg, setMsg] = useState("");
  const [notifyStyle, setNotifyStyle] = useState("");

  useEffect(() => {
    node.getAll().then((res) => {
      console.log(res);
      setPersons(res);
      setFilterPersons(res);
    });
  }, []);

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
    const person = persons.find((p) => p.name == newName);
    // if (persons.some((p) => p.name == newName)) {
    if (person) {
      if (window.confirm(`${newName} is already added to phonebook`)) {
        node.update(person.id, { ...person, phone: newPhone }).then((res) => {
          const copy = persons.filter((p) => p.id != res.id);
          setPersons(copy.concat(res));
          setFilterPersons(copy.concat(res));
        });
      }
      return;
    }
    const newObj = {
      name: newName,
      phone: newPhone,
    };
    node
      .create(newObj)
      .then((res) => {
        setPersons(persons.concat(res));
        setFilterPersons(filterPersons.concat(res));
        setMsg(`${res.name} is added to phonebook`);
        setNotifyStyle("notify");
        setTimeout(() => {
          setMsg(null);
        }, 3000);
      })
      .catch((error) => {
        console.log(error.response.data.error);
        setMsg(error.response.data.error);
        setNotifyStyle("error");
        setTimeout(() => {
          setMsg(null);
        }, 3000);
      });
  };
  const handleSearch = (e) => {
    const compareNames = persons.filter((p) =>
      p.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterPersons(compareNames);
  };

  const handleDel = (id) => {
    console.log(id);
    if (window.confirm("你确定要删除吗")) {
      node.del(id).then((res) => {
        if (res) {
          const copy = persons.filter((p) => p.id != id);
          setPersons(copy);
          setFilterPersons(copy);
        }
      });
    }
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Notify msg={msg} notifyStyle={notifyStyle} />
      <Filter handleSearch={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        handlePhoneChange={handlePhoneChange}
      />
      <h3>Numbers</h3>
      <Persons persons={filterPersons} handleDel={handleDel} />
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
