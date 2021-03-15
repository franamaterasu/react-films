import Grid from "../../components/grid";

const Categories = (props) => {
  const { films } = props;

  return <Grid films={films} />;
};

export default Categories;
