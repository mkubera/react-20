const InputPassword = ({ fn }) => {
  return (
    <input
      type="text"
      onInput={(e) => fn(e.target.value)}
      placeholder="password"
    />
  );
};

export default InputPassword;
