import Card from "../card";

import "./grid.scss";

const Grid = (props) => {
  const { films } = props;

  return (
    <section className="grid">
      {films.map((film) => (
        <Card key={film.id} cardInfo={film} />
      ))}
    </section>
  );
};

export default Grid;
