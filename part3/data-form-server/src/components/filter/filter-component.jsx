const Filter = (props) => {
  return (
    <div>
      filter shown with
      <input type="search" onChange={props.handleSearch} />
    </div>
  );
};

export default Filter;
