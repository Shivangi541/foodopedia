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
    const { name, avatar_url, location, bio, html_url } = this.state.userInfo || {};

    return (
      <div className="about-container">
        <div className="about-header">
          <h1>About Us</h1>
          <p>Welcome to our food ordering platform, where we bring the best culinary experiences right to your doorstep.</p>
        </div>

        <div className="about-content">
          <div className="about-card">
            <h2>Our Mission</h2>
            <p>To provide a seamless and delightful food ordering experience, connecting food lovers with their favorite restaurants.</p>
          </div>
          
          <div className="about-card">
            <h2>Our Vision</h2>
            <p>To become the most trusted and innovative food delivery platform, making quality food accessible to everyone.</p>
          </div>

          <div className="about-card">
            <h2>Our Promise</h2>
            <p>We ensure the highest quality of food delivery, maintaining freshness and taste while providing excellent customer service.</p>
          </div>
        </div>

        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src={avatar_url} alt={name} />
              <h3>{name || "Loading..."}</h3>
              <p>Lead Developer</p>
              <p>{location || "Location"}</p>
              <div className="social-links">
                <a href={html_url} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>

            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member" />
              <h3>Shivangi Dutta</h3>
              <p>React Developer</p>
              <p>India</p>
              <div className="social-links">
                <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <div className="about-content">
          <div className="about-card">
            <h2>Technology Stack</h2>
            <p>Built with React, Redux, and modern web technologies to ensure a fast and responsive user experience.</p>
          </div>
        </div>
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
