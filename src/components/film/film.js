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

  const { backdrop_path, title, overview } = film;

  const bannerBg = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <>
      <section
        className="film-banner"
        style={{ backgroundImage: `url('${bannerBg}')` }}
      >
        <p>{title}</p>
        <p>{overview}</p>
      </section>
    </>
  );
};

export default Film;
