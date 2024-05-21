import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="header">
            <h1>Selling.</h1>
            <nav>
              <ul>
                <li>
                  <NavLink style={{ marginRight: "25px" }}>Home</NavLink>
                  <NavLink style={{ marginRight: "25px" }}>Product</NavLink>
                  <NavLink style={{ marginRight: "25px" }}>About Us</NavLink>
                  <NavLink style={{ marginRight: "25px" }}>Special</NavLink>
                  <NavLink style={{ marginRight: "25px" }}>Testimonial</NavLink>
                  <NavLink style={{ marginRight: "25px" }}>Blog</NavLink>
                  <NavLink style={{ marginRight: "25px" }}>Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
