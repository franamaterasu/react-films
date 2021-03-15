import { Link } from "react-router-dom";
import "./megaMenu.scss";

const MegaMenu = (props) => {
  const { showMegaMenu, categories } = props;

  console.log(categories);

  return (
    <section className={`megamenu  ${showMegaMenu ? "megamenu--show" : ""}`}>
      <section className="megamenu__content">
        {categories.map((category) => {
          return (
            <Link to="/categories" className="megamenu__category">
              <span className="megamenu__category-name">{category.name}</span>
            </Link>
          );
        })}
      </section>
    </section>
  );
};

export default MegaMenu;
