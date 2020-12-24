import Grid from "../../components/grid";

const Home = (props) => {
  const { films, handleMoreClick, handleLessClick, page } = props;

  return (
    <Grid
      films={films}
      handleMoreClick={handleMoreClick}
      handleLessClick={handleLessClick}
      page={page}
    />
  );
};

export default Home;
