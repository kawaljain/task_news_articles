const TextField = ({ value, onChangeHandler, ...props }) => {
  return (
    <div className="input-group input-group-lg">
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={onChangeHandler}
        aria-label="Large"
        aria-describedby="inputGroup-sizing-sm"
        placeholder="Text to search"
        {...props}
      />
    </div>
  );
};
export default TextField;
