import "./megaMenu.scss";

const MegaMenu = (props) => {
  const { showMegaMenu, categories } = props;

  return (
    <section className={`megamenu  ${showMegaMenu ? "megamenu--show" : ""}`}>
      {categories.map((category) => {
        return <p>{category.name}</p>;
      })}
    </section>
  );
};

export default MegaMenu;
