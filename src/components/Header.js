import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus"; // Assuming you have this hook
import UserContext from "../utils/UserContext"; // Assuming you have this context
import { useSelector } from "react-redux";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus(); // Check online status
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const data = useContext(UserContext); // Get logged-in user from context
  console.log("UserContext data:", data);
  const cartItems = useSelector((store) => store.cart.items); // Get cart items from Redux store
  console.log("cartItems", cartItems);
  return (
    <div id="header">
      <div className="logo">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>

      <div
        className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-items ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav-list">
          <li>onlineStatus :{onlineStatus ? "✅" : "❌"}</li>
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
            <Link to="/cart"> 🛒{cartItems.length}</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>

          <button
            className="login"
            onClick={() => {
              if (btnNameReact === "Login") {
                setBtnNameReact("Logout");
              } else {
                setBtnNameReact("Login");
              }
            }}
          >
            {btnNameReact}
          </button>
          <li>User: {data?.loggedInUser || "Guest"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
