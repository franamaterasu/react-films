import { useEffect, useState } from "react";

// Hook propio para la búsqueda
const useSearch = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=7cdd6813e009397c594758fe7bce7b47&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((res) => setFilms(res.results))
      .catch((e) => console.error(e));
  }, []);

  const searchByTitle = (event) => {
    const { value } = event.target;
    if (value && value.length > 2) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=7cdd6813e009397c594758fe7bce7b47&language=en-US&query=${value}&page=1&include_adult=false`
      )
        .then((res) => res.json())
        .then((res) => setFilms(res.results))
        .catch((e) => console.error(e));
    }
  };

  return { films, setFilms, searchByTitle };
};

export default useSearch;
