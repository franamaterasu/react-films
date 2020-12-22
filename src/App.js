import { useState, useEffect } from "react";
import Header from "./components/header";
import Grid from "./components/grid";

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=7cdd6813e009397c594758fe7bce7b47&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((res) => setFilms(res.results))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Header />
      <Grid films={films} />
    </>
  );
}

export default App;
