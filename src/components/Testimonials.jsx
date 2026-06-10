import "./Testimonials.css";
import person1 from "../images/person1.jpg";
import person2 from "../images/person2.jpg";
import person3 from "../images/person3.jpg";
import person4 from "../images/person4.jpg";


function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>

      <div className="testimonials-grid">

        <article className="testimonial-card">
          <h3>★★★★★</h3>
          <img
            src={person1}
            alt="Customer profile"
          />
          <h4>Sarah</h4>
          <p>
            Amazing food and wonderful atmosphere.
            The staff were friendly and attentive.
          </p>
        </article>

        <article className="testimonial-card">
          <h3>★★★★★</h3>
          <img
            src={person2}
            alt="Customer profile"
          />
          <h4>Michael</h4>
          <p>
            One of the best Mediterranean restaurants
            I've visited in Chicago.
          </p>
        </article>

        <article className="testimonial-card">
          <h3>★★★★★</h3>
          <img
            src={person3}
            alt="Customer profile"
          />
          <h4>Emma</h4>
          <p>
            Fresh ingredients, delicious dishes,
            and a welcoming environment.
          </p>
        </article>

        <article className="testimonial-card">
          <h3>★★★★★</h3>
          <img
            src={person4}
            alt="Customer profile"
          />
          <h4>David</h4>
          <p>
            Highly recommended. The lemon dessert
            was absolutely fantastic.
          </p>
        </article>

      </div>
    </section>
  );
}

export default Testimonials;