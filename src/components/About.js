//import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent componentDidMount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About Us</h1>
        <p>This is a simple React application.</p>
        <p>We are learning React Router.</p>

        <UserClass name={"shivangi dutta"} />
        <UserClass name={"shivangi dutta2"} />
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
