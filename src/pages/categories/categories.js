import Grid from "../../components/grid";
import { useLocation } from "react-router-dom";

const Categories = (props) => {
  const location = useLocation();

  const arrayLocation = location.hash.split(",");

  const transformedLocation = arrayLocation.toString();

  const finalLocation = transformedLocation.replace("#", "");

  const { films } = props;

  return <Grid films={films} category={finalLocation} />;
};

export default Categories;
