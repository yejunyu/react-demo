const Counties = ({ searchList }) => {
  if (searchList.length >= 10) {
    return <div>Too many matches, please enter a more specific query</div>;
  }

  if (searchList.length == 1) {
    let country = searchList[0];
    let capital = country.capital[0];
    let area = country.area;
    let languages = country.languages;
    let flag = country.flags.svg;

    return (
      <div>
        <h1>{country.name.common}</h1>
        <div>capital {capital}</div>
        <div>area {area}</div>
        <h2>languages</h2>
        <ul>
          {Object.entries(languages).map(([k, v]) => {
            return <li key={k}>{v}</li>;
          })}
        </ul>
        <img src={flag} alt="flag" />
      </div>
    );
  }

  console.log(searchList);
  return (
    <div>
      {searchList.map((country) => {
        return (
          <div key={country.name.common}>
            <div>{country.name.common}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Counties;
