import Header from "./components/header";
import Film from "./components/film";
import Home from "./pages/home";
import Top from "./pages/top";
import Recents from "./pages/recents";
import useSearch from "./components/useSearch";
import useSlider from "./components/useSlider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const {
    films,
    searchByTitle,
    handleMoreClick,
    handleLessClick,
    page,
    showHomeFilms,
    showTopFilms,
    showRecentFilms,
  } = useSearch();

  const { slider } = useSlider();

  return (
    <>
      <Router>
        <Header
          onSearch={searchByTitle}
          handleHomeClick={showHomeFilms}
          handleTopClick={showTopFilms}
          handleRecentClick={showRecentFilms}
        />
        <Switch>
          <Route path="/" exact={true}>
            <Home
              films={films}
              slider={slider}
              page={page}
              handleMoreClick={handleMoreClick}
              handleLessClick={handleLessClick}
            />
          </Route>
          <Route path="/movie/:id" exact={true}>
            <Film />
          </Route>
          <Route path="/top" exact={true}>
            <Top films={films} />
          </Route>
          <Route path="/recents" exact={true}>
            <Recents films={films} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
