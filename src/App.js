import "./App.css";
import Header from "./Components/Header";
import Zebras from "./Components/Zebras";
import Button from "./Components/Button";
import NameInput from "./Components/NameInput";
// shift+alt+up/down -- duplikat linii
// ctrl+d -- wybiera taki sam ciag tekstu
// ctrl+shift+k -- kasuje linie

function App() {
  const fn = () => console.log(true);
  const nameInputFn = (name) => console.log(name);

  return (
    <div className="App">
      {/* <Header /> */}
      <Zebras />
      {/* <Button onClickFn={fn} />
      <NameInput onInputFn={nameInputFn} /> */}
    </div>
  );
}

export default App;
