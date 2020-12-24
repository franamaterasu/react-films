import Slider from "../../components/slider";
import Grid from "../../components/grid";

const Home = (props) => {
  const {
    slider,
    films,
    handleMoreClick,
    handleLessClick,
    page,
    sliderHeight,
  } = props;

  return (
    <>
      <Slider slider={slider} sliderHeight={sliderHeight} />
      <Grid
        films={films}
        handleMoreClick={handleMoreClick}
        handleLessClick={handleLessClick}
        page={page}
      />
    </>
  );
};

export default Home;
