import { useState, useEffect } from "react";
import axios from "axios";
import FilterCountries from "./components/FilterCountries";
import Counties from "./components/Countries";

const App = () => {
  const [value, setValue] = useState("");
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((res) => {
        setSearchList(res.data);
      });
  }, []);

  const handleChange = (event) => {
    const v = event.target.value;
    setValue(event.target.value);
    const filtered = searchList.filter((item) =>
      item.name.common.toLowerCase().includes(v.toLowerCase())
    );
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
