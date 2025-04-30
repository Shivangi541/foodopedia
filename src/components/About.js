import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is a simple React application.</p>
      <p>We are learning React Router.</p>
      <User />
      <UserClass name={"shivangi dutta"} />
    </div>
  );
};

export default About;
