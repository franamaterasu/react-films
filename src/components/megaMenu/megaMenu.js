import "./megaMenu.scss";

const MegaMenu = (props) => {
  const { showMegaMenu } = props;

  return (
    <section className={`megamenu  ${showMegaMenu ? "megamenu--show" : ""}`}>
      <p>Este es el megamenu</p>
    </section>
  );
};

export default MegaMenu;
