//import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
    this.state = {
      userInfo: null,
    };
  }
  async componentDidMount() {
    console.log("parent componentDidMount");
    const data = await fetch("https://api.github.com/users/shivangi541");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("parent componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("parent componentWillUnmount");
  }

  render() {
    console.log("parent render");
    const { name, avatar_url, location } = this.state.userInfo || {};
    return (
      <div>
        <h1>About Us</h1>
        <p>This is a simple React application.</p>
        <p>We are learning React Router.</p>
        <p>{name}</p>
        <p>{location}</p>
        <img src={avatar_url} alt="avatar" />
        <UserClass name={"shivangi dutta"} />
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>This is a simple React application.</p>
//       <p>We are learning React Router.</p>

//       <UserClass name={"shivangi dutta"} />
//     </div>
//   );
// };

export default About;
