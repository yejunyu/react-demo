const ImportantRadio = (props) => {
  return (
    <div>
      all <input
        type="radio"
        name="filter"
        value={props.value}
        checked={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default ImportantRadio;
