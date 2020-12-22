import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./film.scss";

const Film = () => {
  const [film, setFilm] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=7cdd6813e009397c594758fe7bce7b47&language=en-US`
    )
      .then((res) => res.json())
      .then((res) => setFilm(res))
      .catch((e) => console.error(e));
  }, []);

  const {
    backdrop_path,
    title,
    overview,
    genres,
    vote_average,
    vote_count,
  } = film;

  const bannerBg = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <article>
      <section
        className="film-banner"
        style={{ backgroundImage: `url('${bannerBg}')` }}
      >
        <div className="film-banner__info">
          <p className="film-banner__title">{title}</p>
          <p className="film-banner__overview">{overview}</p>
          <div className="film-banner__details">
            {/* 
            <div className="film-banner__genres">
              {genres.map((genre) => (
                <article className="film-banner__genre">{genre.name}</article>
              ))}
            </div>
            */}
            <div className="film-banner__votes">
              <article className="film-banner__votes-item">
                Número de votos: {vote_count}
              </article>
              <article className="film-banner__votes-item" title="Nota media">
                Nota media: {vote_average}
              </article>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Film;
