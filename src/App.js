import Header from "./components/header";
import Grid from "./components/grid";
import useSearch from "./components/useSearch";

function App() {
  const { films, searchByTitle } = useSearch();

  return (
    <>
      <Header onSearch={searchByTitle} />
      <Grid films={films} />
    </>
  );
}

export default App;
