import "./About.css";
import restaurant1 from "../images/restaurant1.webp";
import restaurant2 from "../images/restaurant2.jpg";

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>

        <p>
          Little Lemon is a charming neighborhood
          restaurant located in the heart of Chicago.
          We serve traditional Mediterranean recipes
          with a modern twist, using fresh ingredients
          and family recipes passed down through generations.
        </p>
      </div>

      <div className="about-images">
        <img
          src={restaurant1}
          alt="Little Lemon restaurant interior"
        />

        <img
          src={restaurant2}
          alt="Little Lemon chefs preparing food"
        />
      </div>
    </section>
  );
}

export default About;