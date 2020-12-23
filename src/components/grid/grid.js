import Card from "../card";
import "./grid.scss";

const Grid = (props) => {
  const { films, handleMoreClick, handleLessClick, page } = props;

  return (
    <>
      <section className="grid">
        {films.map((film) => (
          <Card key={film.id} cardInfo={film} />
        ))}
      </section>
      <footer className="grid__footer">
        {page === 1 ? (
          ""
        ) : (
          <button
            className="grid__button grid__button--prev"
            onClick={handleLessClick}
          >
            Prev
          </button>
        )}
        {films.length < 20 ? (
          ""
        ) : (
          <button
            className="grid__button grid__button--next"
            onClick={handleMoreClick}
          >
            Next
          </button>
        )}
      </footer>
    </>
  );
};

export default Grid;
