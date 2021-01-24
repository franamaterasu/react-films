import { useState } from "react";
import Header from "./components/header";
import Film from "./components/film";
import Home from "./pages/home";
import Top from "./pages/top";
import Recents from "./pages/recents";
import useSearch from "./components/useSearch";
import useSlider from "./components/useSlider";
import ThemeContext from "./context/themeContext";
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
    hideSlider,
    sliderHeight,
    showSlider,
  } = useSearch();

  const { slider } = useSlider();

  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <>
      <Router>
        <ThemeContext.Provider value={theme}>
          <Header
            onSearch={searchByTitle}
            onFocus={hideSlider}
            onBlur={showSlider}
            handleHomeClick={showHomeFilms}
            handleTopClick={showTopFilms}
            handleRecentClick={showRecentFilms}
            handleThemeClick={changeTheme}
          />
          <Switch>
            <Route path="/" exact={true}>
              <Home
                films={films}
                slider={slider}
                page={page}
                handleMoreClick={handleMoreClick}
                handleLessClick={handleLessClick}
                sliderHeight={sliderHeight}
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
        </ThemeContext.Provider>
      </Router>
    </>
  );
}

export default App;
