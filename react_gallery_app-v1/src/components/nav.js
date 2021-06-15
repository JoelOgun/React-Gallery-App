import React from "react";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav class="main-nav">
        <ul>
          <li>
            <NavLink to="0">Cats</NavLink>
          </li>
          <li>
            <NavLink to="0">Dogs</NavLink>
          </li>
          <li>
            <NavLink to="0">Computers</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Nav;
