import Nav from "./Nav";
import logo from "../images/little-lemon-logo.png";

function Header() {
  return (
    <header className="header">
      <img
        className="logo"
        src={logo}
        alt="Little Lemon Logo"
      />

      <Nav />
    </header>
  );
}

export default Header;