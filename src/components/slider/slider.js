import { Link } from "react-router-dom";
import "./slider.scss";

const Slider = (props) => {
  const { slider } = props;

  return (
    <section className="slider">
      {slider.map((item) => {
        const { id, title, overview, backdrop_path } = item;
        const posterUrl = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

        return (
          <article
            className="slider-item"
            style={{ backgroundImage: `url('${posterUrl}')` }}
          >
            <div class="slider-item__info">
              <p className="slider-item__title">{title}</p>
              <p className="slider-item__overview">{overview}</p>
              <Link className="slider-item__button" to={`/movie/${id}`}>
                More info
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Slider;
