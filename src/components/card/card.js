import "./card.scss";

const Card = () => {
  return (
    <article className="card">
      <img
        className="card__image"
        src="https://images.pexels.com/photos/2437286/pexels-photo-2437286.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="Card"
      />
      <section className="card__info">
        <h4 className="card__title">Título</h4>
        <p className="card__resume">
          I'm baby kinfolk tousled pitchfork, umami coloring book viral
          sartorial edison bulb microdosing.
        </p>
      </section>
    </article>
  );
};
export default Card;
