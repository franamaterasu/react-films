import { Link } from "react-router-dom";

import "./card.scss";

const Card = (props) => {
  const { id, title, poster_path, overview } = props.cardInfo;

  const posterUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <article className="card">
      <Link className="card__content" to={`/movie/${id}`}>
        <img className="card__image" src={posterUrl} alt={title} />
        <section className="card__info">
          <h4 className="card__title">{title}</h4>
          <p className="card__resume">{overview}</p>
        </section>
      </Link>
    </article>
  );
};
export default Card;
