const Counties = ({ searchList }) => {
  if (searchList.length >= 10) {
    return <div>Too many matches, please enter a more specific query</div>;
  }

  if (searchList.length == 1) {
    let country = searchList[0];
    let capital = country.capital[0];
    let area = country.area;
    let languages = country.languages;

    return (
      <div>
        <h1>{country.name.common}</h1>
        <div>capital {capital}</div>
        <div>area {area}</div>
        <h2>
          <ul>
            {languages.values().map((language) => {
              return <li key={language}>{language}</li>;
            })}
          </ul>
        </h2>
      </div>
    );
  }
};

export default Counties;
