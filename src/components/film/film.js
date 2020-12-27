import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Grid from "../grid";

import "./film.scss";

const Film = () => {
  const [film, setFilm] = useState([]);
  const [recomendations, setRecomendations] = useState([]);
  const { id } = useParams();

  const shortRecomendations = recomendations.slice(0, 10);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=7cdd6813e009397c594758fe7bce7b47&language=en-US`
    )
      .then((res) => res.json())
      .then((res) => setFilm(res))
      .catch((e) => console.error(e));
  }, [id]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=7cdd6813e009397c594758fe7bce7b47&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((res) => setRecomendations(res.results))
      .catch((e) => console.error(e));
  }, [id]);

  const {
    backdrop_path,
    title,
    overview,
    genres,
    vote_average,
    vote_count,
  } = film;

  const bannerBg = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  const defaultBannerBg =
    "https://images.pexels.com/photos/1312488/pexels-photo-1312488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

  return (
    <>
      <section
        className="film-banner"
        style={{
          backgroundImage: backdrop_path
            ? `url(${bannerBg})`
            : `url(${defaultBannerBg})`,
        }}
      >
        <div className="film-banner__info">
          <p className="film-banner__title">{title}</p>
          <p className="film-banner__overview">{overview}</p>
          <div className="film-banner__details">
            {genres && genres.length > 1 ? (
              <div className="film-banner__genres">
                {genres.map((genre) => (
                  <article className="film-banner__genre">{genre.name}</article>
                ))}
              </div>
            ) : (
              ""
            )}
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
      {recomendations.length > 0 ? (
        <section className="film-related">
          <h4 className="film-related__title">Related films</h4>
          <Grid films={shortRecomendations} />
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Film;
