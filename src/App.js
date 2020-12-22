import Header from "./components/header";
import Grid from "./components/grid";
import Film from "./components/film";
import useSearch from "./components/useSearch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const { films, searchByTitle } = useSearch();

  return (
    <>
      <Router>
        <Header onSearch={searchByTitle} />
        <Switch>
          <Route path="/" exact={true}>
            <Grid films={films} />
          </Route>
          <Route path="/movie/:id" exact={true}>
            <Film />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
