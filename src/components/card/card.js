import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./card.scss";

const Card = (props) => {
  const { id, title, poster_path, overview } = props.cardInfo;

  const posterUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  const handleClickScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <article className="card" onClick={handleClickScrollTop}>
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

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  overview: PropTypes.string.isRequired,
};

Card.defaultProps = {
  title: "Film Title",
  overview:
    "I'm baby small batch air plant pop-up, freegan yr single-origin coffee master cleanse.",
};

export default Card;
