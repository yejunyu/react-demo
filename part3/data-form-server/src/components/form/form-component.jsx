const PersonForm = ({ handleSubmit, handleInputChange, handlePhoneChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input type="text" onChange={handleInputChange} />
      </div>
      <div>
        phone: <input type="text" onChange={handlePhoneChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
