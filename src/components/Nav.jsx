import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation Menu"
      >
        ☰
      </button>

      {isOpen && (
        <div
          className="overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Menu</Link></li>
        <li><Link to="/reservations" onClick={() => setIsOpen(false)}>Reservations</Link></li>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Order Online</Link></li>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;