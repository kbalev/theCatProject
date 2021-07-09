import React, { useState } from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className="logo">Cats 4 You</div>
        <ul
          className="nav-links"
          style={{ transform: open ? "translateX(-500px)" : "translateX(0px)" }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catbreed">About</Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
          <li>
            <Link className="basket" to="/Cart">Cart</Link>
          </li>
          <li>
            <Link to="/Rescue">Rescue</Link>
          </li>
        </ul>
        <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
      </nav>
    </div>
  );
}

export default Navbar;
