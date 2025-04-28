import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  return (
    <div id="header">
      <div className="logo">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>

          <button
            className="login"
            onClick={() => {
              if (btnNameReact === "Login") {
                setBtnNameReact("Logout");
              } else {
                setBtnNameReact("Login");
              }

              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
