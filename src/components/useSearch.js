import { useEffect, useState } from "react";

// Hook propio para la búsqueda
const useSearch = () => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const handleMoreClick = () => {
    setPage(page + 1);
  };

  const handleLessClick = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=7cdd6813e009397c594758fe7bce7b47&language=en-US&page=${page}`
    )
      .then((res) => res.json())
      .then((res) => setFilms(res.results))
      .catch((e) => console.error(e));
  }, [page]);

  const searchByTitle = (event) => {
    setSearchValue(event.target.value);
    if (searchValue) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=7cdd6813e009397c594758fe7bce7b47&language=en-US&query=${searchValue}&page=${page}&include_adult=false`
      )
        .then((res) => res.json())
        .then((res) => setFilms(res.results))
        .catch((e) => console.error(e));
    } else if (searchValue === "") {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=7cdd6813e009397c594758fe7bce7b47&language=en-US&page=${page}`
      )
        .then((res) => res.json())
        .then((res) => setFilms(res.results))
        .catch((e) => console.error(e));
    }
  };

  return {
    films,
    setFilms,
    page,
    setPage,
    searchByTitle,
    handleMoreClick,
    handleLessClick,
  };
};

export default useSearch;
