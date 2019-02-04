import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  active = {
    fontWeight: "bold",
    color: "red"
  };

  header = {
    display: "flex",
    justifyContent: "space-evenly",
    listStyle: "none"
  };
  render() {
    return (
      <div style={this.header}>
       
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <NavLink exact to="/addcustomer" className="nav-link">
                Add Customers
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/list-customers" className="nav-link">
                List Customers
              </NavLink>
              </li>
              <li className="nav-item">
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
