import React, { PureComponent } from "react";

export default class ExampleOfPureComp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="number">
        <h1>Pure Component</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me to Increase{" "}
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Click me to Decrease
        </button>
      </div>
    );
  }
}
