import React from "react";
import { BsXCircle } from "react-icons/bs";
import "./modal.scss";

const Modal = (props) => {
  const { title, poster, closePortal } = props;

  const bannerBg = `https://image.tmdb.org/t/p/original${poster}`;

  return (
    <section className="modal">
      <section className="modal__container">
        <button className="modal__button" onClick={closePortal}>
          <BsXCircle className="modal__button-icon" />
        </button>
        <img className="modal__image" src={bannerBg} alt={title} />
        <section className="modal__info">
          <h4 className="modal__title">{title}</h4>
        </section>
      </section>
    </section>
  );
};

export default Modal;
