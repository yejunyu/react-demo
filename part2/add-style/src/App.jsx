import { useState, useEffect } from "react";
import axios from "axios";
import FilterCountries from "./components/FilterCountries";
import Counties from "./components/Countries";

const App = () => {
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((res) => {
        setCountries(res.data);
        setSearchList(res.data);
      });
  }, []);

  const handleChange = (event) => {
    const v = event.target.value;
    console.log(v);
    setValue(event.target.value);
    const filtered = countries.filter((item) =>
      item.name.common.toLowerCase().includes(v.toLowerCase())
    );
    console.log(filtered);
    setSearchList(filtered);
  };

  return (
    <div>
      <FilterCountries value={value} handleChange={handleChange} />
      <Counties searchList={searchList} />
    </div>
  );
};

export default App;
