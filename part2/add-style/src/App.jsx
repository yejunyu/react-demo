import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [value, setValue] = useState("");
  const [country, setCountry] = useState({});
  const [countryList, setCountryLIst] = useState([]);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((res) => {
        setCountryLIst(res.data);
      });
  }, []);

  const handleChange = (event) => {
    const v = event.target.value;
    setValue(event.target.value);
  };

  const onSearch = (event) => {
    event.preventDefault();
    setCurrency(value);
  };

  return (
    <div>
      find countries <input type="text" onChange={handleChange} />
    </div>
  );
};

export default App;
