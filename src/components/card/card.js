import { useContext } from "react";
import usePortal from "react-useportal";
import Modal from "../modal";
import ThemeContext from "../../context/themeContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./card.scss";

const Card = (props) => {
  const { id, title, poster_path, backdrop_path, overview } = props.cardInfo;

  var { openPortal, closePortal, isOpen, Portal } = usePortal();

  const theme = useContext(ThemeContext);

  const posterUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  const handleClickScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <article className={`card`}>
        <div
          onClick={openPortal}
          className={`card__button ${
            theme ? "card__button--dark" : "card__button--light"
          }`}
        >
          Preview
        </div>
        <Link
          className="card__content"
          to={`/movie/${id}`}
          onClick={handleClickScrollTop}
        >
          {poster_path ? (
            <img
              loading="lazy"
              className="card__image"
              src={posterUrl}
              alt={title}
            />
          ) : (
            <img
              loading="lazy"
              className="card__image"
              src="https://images.pexels.com/photos/3607083/pexels-photo-3607083.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt={title}
            />
          )}
          <section
            className={`card__info ${
              theme ? "card__info--dark" : "card__info--light"
            }`}
          >
            <h4
              className={`card__title ${
                theme ? "card__title--dark" : "card__title--light"
              }`}
            >
              {title}
            </h4>
            <p
              className={`card__resume ${
                theme ? "card__resume--dark" : "card__resume--light"
              }`}
            >
              {overview}
            </p>
          </section>
        </Link>
      </article>
      {isOpen && (
        <Portal>
          <Modal
            title={title}
            poster={backdrop_path}
            closePortal={closePortal}
          />
        </Portal>
      )}
    </>
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
