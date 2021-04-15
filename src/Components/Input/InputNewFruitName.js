const InputPassword = ({ value, fn }) => {
  return (
    <input
      type="text"
      onInput={(e) => fn(e.target.value)}
      placeholder="password"
      value={value}
    />
  );
};

export default InputPassword;
