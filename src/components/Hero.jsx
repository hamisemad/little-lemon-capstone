import heroImage from "../images/hero-image.png";
import "./Hero.css";
import { Link } from "react-router-dom";


function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>

        <h2>Chicago</h2>

        <p>
          We are a family-owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
        <Link
          to="/booking"
          className="reserve-button"
        >
          <button aria-label="Reserve a Table">
            Reserve a Table
          </button>
        </Link>

      </div>

      <div className="hero-image">
        <img
          src={heroImage}
          alt="Little Lemon signature dish"
        />
      </div>
    </section>
  );
}

export default Hero;