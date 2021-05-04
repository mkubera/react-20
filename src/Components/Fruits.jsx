import React from "react";
import InputNewFruitName from "./Input/InputNewFruitName";
import Button from "./shared/Button";

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
      newFruitName: "",
    };
    this.state.nextId = this.state.fruits.length + 1;
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
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
      name: this.state.newFruitName,
      isVisible: true,
    };
    const newFruits = [...this.state.fruits, newFruit];
    this.setState({
      fruits: newFruits,
      nextId: newFruits.length + 1,
      newFruitName: "",
    });
  };

  removeFruit = () => {
    const newFruits = this.state.fruits;
    newFruits.pop();
    this.setState({ fruits: newFruits });
  };

  setNewFruitName = (newFruitName) => {
    this.setState({ newFruitName });
  };

  removeFruitById = (id) => {
    const newFruits = this.state.fruits.filter((fruit) => fruit.id !== id);
    this.setState({ fruits: newFruits });
  };

  render() {
    return (
      <>
        <h1>{this.state.title}</h1>
        <Button
          onClickFn={this.addFruit}
          text="Add a fruit"
          showCounter={true}
        />
        <Button
          onClickFn={this.removeFruit}
          text="Remove last fruit"
          showCounter={false}
        />
        <InputNewFruitName
          value={this.state.newFruitName}
          fn={this.setNewFruitName}
        />

        {/* <p>{this.state.password}</p> */}
        <ul>
          {this.state.fruits.map(({ id, name, isVisible }) => {
            return (
              <li
                key={id}
                style={{
                  display: isVisible ? "list" : "none",
                }}>
                {name}&nbsp;
                <Button
                  onClickFn={() => this.removeFruitById(id)}
                  text="delete"
                  showCounter={false}
                />
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Fruit;
