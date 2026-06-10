import logo2 from "../images/logo2.png";

function Footer() {
  return (
    <footer>
      <div>
        <img
          src={logo2}
          alt="Little Lemon Logo"
          className="footer-logo"
        />
      </div>

      <div>
        <h4>Navigation</h4>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
        </ul>
      </div>

      <div>
        <h4>Contact</h4>

        <ul>
          <li>Chicago, Illinois</li>
          <li>+1 555 123 4567</li>
          <li>info@littlelemon.com</li>
        </ul>
      </div>

      <div>
        <h4>Social Media</h4>

        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>X</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;