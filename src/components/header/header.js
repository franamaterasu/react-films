import { Link } from "react-router-dom";
import "./header.scss";

const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        ReactFilms
      </Link>
      <section className="header__actions">
        <nav className="header__nav">
          <Link className="header__nav-item" to="/">
            Home
          </Link>
          <li className="header__nav-item">Top</li>
          <li className="header__nav-item">Recents</li>
        </nav>
        <input
          onChange={onSearch}
          className="header__search"
          type="text"
          placeholder="Busca cualquier película..."
        />
      </section>
    </header>
  );
};

export default Header;
