import "./Header.css";
import { NavLink } from "react-router";

function Header() {
  return (
    <nav className='navigationBar'>
      <NavLink className={"navLinks"} to='/'>
        Pocetna
      </NavLink>
      <NavLink className={"navLinks"} to='/todolista'>
        To Do
      </NavLink>
      <NavLink className={"navLinks"} to='/shop'>
        Shop
      </NavLink>
    </nav>
  );
}

export default Header;
