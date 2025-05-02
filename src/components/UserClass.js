import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "User",
      count: 0,
    };
    console.log("child constructor");
  }
  componentDidMount() {
    console.log("child componentDidMount");
  }
  render() {
    const { name } = this.props;
    console.log("child render");
    return (
      <div>
        <h1>User Class Component</h1>
        <p>{name}</p>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click me
        </button>
        <p>{this.state.name}</p>
        <p>This is a simple React application.</p>
        <p>We are learning React Router.</p>
      </div>
    );
  }
}
export default UserClass;
