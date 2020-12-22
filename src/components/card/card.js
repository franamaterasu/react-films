import "./card.scss";

const Card = (props) => {
  const { title, poster_path, overview } = props.cardInfo;

  const posterUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <article className="card">
      <img className="card__image" src={posterUrl} alt={title} />
      <section className="card__info">
        <h4 className="card__title">{title}</h4>
        <p className="card__resume">{overview}</p>
      </section>
    </article>
  );
};
export default Card;
