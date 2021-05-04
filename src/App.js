import React from "react";
import "./App.css";
// import Header from "./Components/Header";
// import Zebras from "./Components/Zebras";
// import Button from "./Components/Button";
// import NameInput from "./Components/NameInput";
import Fruits from "./Components/Fruits";
import Footer from "./Components/Footer/Footer";
// shift+alt+up/down -- duplikat linii
// ctrl+d -- wybiera taki sam ciag tekstu
// ctrl+shift+k -- kasuje linie

class App extends React.Component {
  constructor(props) {
    super(props);
    // const fn = () => console.log(true);
    // const nameInputFn = (name) => console.log(name);
    this.state = {
      count: 42,
      people: ["Mikolaj", "Paulina", "Daniel"],
      joke: "No joke has been fetched yet...",
      currencies: [],
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://api.chucknorris.io/jokes/random")
      .then((resp) => resp.json())
      .then((resp) => this.setState({ joke: resp.value }))
      .catch((err) => this.setState({ joke: err }));

    fetch("http://api.nbp.pl/api/exchangerates/tables/a/?format=json")
      .then((resp) => resp.json())
      .then((resp) => {
        const chosenCurrencies = resp[0].rates.filter(
          ({ code }) => code === "THB" || code === "USD" || code === "AUD"
        );
        this.setState({ currencies: chosenCurrencies });
        // this.setState((state) => ({ currencies: chosenCurrencies}))
      })
      .catch((err) => this.setState({ joke: err }));
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <ul>
          {this.state.currencies.map(({ currency, code, mid }) => {
            return (
              <li>
                {currency} ({code}): {mid}
              </li>
            );
          })}
        </ul>
        <p>{this.state.joke}</p>
        <p>learn react</p>
        {/* <Count count={this.state.count} /> */}
        {/* <ul>
        {this.state.people.map((p) => {
          return (
            <li>
              <a href="#">{p}</a>
              <p>fkdjfkdjfkdjfkdj</p>
            </li>
          );
        })}
      </ul> */}
        {/* <Header /> */}
        <Fruits />
        {/* <Zebras /> */}
        {/* <Button onClickFn={fn} />
      <NameInput onInputFn={nameInputFn} /> */}
        <Footer dateFrom={1999} dateTo={2021} />
      </div>
    );
  }
}

export default App;
