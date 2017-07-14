import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>

        <NavLink to="/" className="headerImg"> </NavLink>

        <nav>
          <ul>
            <li>
              <NavLink to="/Work" activeClassName={"active"}>Work</NavLink>
            </li>
            <li>
              <NavLink to="/Play" activeClassName={"active"}>Play</NavLink>
            </li>
            <li>
              <NavLink to="/Contact" activeClassName={"active"}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
