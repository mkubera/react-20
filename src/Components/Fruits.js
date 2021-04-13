import React from "react";
import InputPassword from "./Input/InputPassword";

class Fruit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: [
        { id: 1, name: "Apple", isVisible: true },
        { id: 2, name: "Gooseberries", isVisible: !false },
        { id: 3, name: "Orange", isVisible: true },
      ],
      title: "Wooooooooooooo",
      password: "",
    };
    this.state.nextId = this.state.fruits.length + 1;
  }

  // funkcja z Component Lifecycle
  // https://reactjs.org/docs/react-component.html
  // odpala sie, gdy component jest "mounted"
  componentDidMount() {
    setTimeout(() => this.setState({ title: "TAK" }), 2000);
  }

  addFruit = () => {
    console.log(this.state);
    // let newFruits = this.state.fruits.concat({
    //   id: this.state.nextId,
    //   name: "Mango",
    // });
    // ALTERNATIVE:
    const newFruit = {
      id: this.state.nextId,
      name: "Mango",
      isVisible: true,
    };
    const newFruits = [...this.state.fruits, newFruit];
    this.setState({
      fruits: newFruits,
      nextId: newFruits.length + 1,
    });
  };

  removeFruit = () => {
    const newFruits = this.state.fruits;
    newFruits.pop();
    this.setState({ fruits: newFruits });
  };

  updatePassword = (password) => {
    this.setState({ password });
  };

  removeFruitById = (id) => {
    const newFruits = this.state.fruits.filter((fruit) => fruit.id !== id);
    this.setState({ fruits: newFruits });
  };

  render() {
    return (
      <>
        <h1>{this.state.title}</h1>
        <button onClick={this.addFruit}>Add a fruit</button>
        <button onClick={this.removeFruit}>Remove last fruit</button>
        <InputPassword fn={this.updatePassword} />

        <p>{this.state.password}</p>
        <ul>
          {this.state.fruits.map(({ id, name, isVisible }) => {
            return (
              <li
                key={id}
                style={{
                  display: isVisible ? "list" : "none",
                }}>
                {name}&nbsp;
                <button onClick={() => this.removeFruitById(id)}>delete</button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Fruit;
