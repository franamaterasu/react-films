import Grid from "../../components/grid";

const Recents = (props) => {
  const { films } = props;

  return <Grid films={films} />;
};

export default Recents;
