const NameInput = ({ onInputFn }) => {
  return (
    <input
      type="text"
      placeholder="Your name"
      onInput={(e) => onInputFn(e.target.value)}
    />
  );
};

// function NameInput ({onInputFn}) { ... }

export default NameInput;
