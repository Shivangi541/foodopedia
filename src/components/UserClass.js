import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <h1>User Class Component</h1>
        <p>{this.props.name}</p>
        <p>This is a simple React application.</p>
        <p>We are learning React Router.</p>
      </div>
    );
  }
}
export default UserClass;
