import "./Specials.css";
import salad from "../images/salad.png";
import bruschetta from "../images/bruschetta.png";
import lemonDessert from "../images/lemon -dessert.png";

function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This week's specials!</h2>

        <button>Online Menu</button>
      </div>

      <div className="specials-cards">
        <article className="special-card">
          <img
            src={salad}
            alt="Greek Salad"
          />

          <div className="card-content">
            <div className="card-title">
              <h3>Greek Salad</h3>
              <span>$12.99</span>
            </div>

            <p>
              The famous Greek salad of crispy lettuce, peppers,
              olives and our Chicago-style feta cheese, garnished
              with crunchy garlic and fresh rosemary croutons.
            </p>

            <a href="/">Order a delivery</a>
          </div>
        </article>

        <article className="special-card">
          <img
            src={bruschetta}
            alt="Bruschetta"
          />

          <div className="card-content">
            <div className="card-title">
              <h3>Bruschetta</h3>
              <span>$5.99</span>
            </div>

            <p>
              Our Bruschetta is made from grilled bread that has
              been smeared with garlic and seasoned with salt and
              olive oil, creating a simple yet delicious appetizer.
            </p>

            <a href="/">Order a delivery</a>
          </div>
        </article>

        <article className="special-card">
          <img
            src={lemonDessert}
            alt="Lemon Dessert"
          />

          <div className="card-content">
            <div className="card-title">
              <h3>Lemon Dessert</h3>
              <span>$5.00</span>
            </div>

            <p>
              This comes straight from grandma's recipe book.
              Every last ingredient has been sourced and prepared
              with care to create an authentic homemade dessert.
            </p>

            <a href="/">Order a delivery</a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Specials;