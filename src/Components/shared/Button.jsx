import React, { useState } from "react";

function Button({ onClickFn, text, showCounter }) {
  const initCount = 0; //poczatkowy stan (init == initial)
  const initColour = "#65a1d8"; //poczatkowy stan (init == initial)
  const initState = { people: [{ name: "K" }] };
  const [count, setCount] = useState(initCount);
  const [colour, setColour] = useState(initColour);
  const [state, setState] = useState(initState);

  return (
    <>
      {showCounter ? (
        <p style={{ color: colour }}>Fruits added: {count}.</p>
      ) : null}
      {showCounter ? (
        <ul>
          {state.people.map((p) => (
            <li>{p.name}</li>
          ))}
        </ul>
      ) : null}
      <button onClick={() => setColour("#e2b171")}>Change colour</button>
      <button
        onClick={() => {
          onClickFn();
          setCount(count + 1);
        }}>
        {text}
      </button>
    </>
  );
}

export default Button;
