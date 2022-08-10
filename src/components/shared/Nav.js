import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/items">Items</NavLink>
      <NavLink to="/create-item">Add</NavLink>
    </nav>
  );
};

export default Nav;
