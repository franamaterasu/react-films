import React from "react";
import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import { BsXCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./modal.scss";

const Modal = (props) => {
  const {
    id,
    title,
    overview,
    poster,
    closePortal,
    handleClickScrollTop,
  } = props;

  const bannerBg = `https://image.tmdb.org/t/p/original${poster}`;

  const theme = useContext(ThemeContext);

  return (
    <section className="modal">
      <section className="modal__container">
        <button className="modal__button" onClick={closePortal}>
          <BsXCircle className="modal__button-icon" />
        </button>
        <img className="modal__image" src={bannerBg} alt={title} />
        <section className="modal__info">
          <h4 className="modal__title">{title}</h4>
          <p className="modal__resume">{overview}</p>
          <Link
            onClick={handleClickScrollTop}
            to={`/movie/${id}`}
            className={` modal__link ${
              theme ? "modal__link--dark" : "modal__link--light"
            }`}
          >
            Watch
          </Link>
        </section>
      </section>
    </section>
  );
};

export default Modal;
