import { Link } from "react-router-dom";
import "./header.scss";

const Header = ({
  onSearch,
  handleTopClick,
  handleRecentClick,
  handleHomeClick,
}) => {
  return (
    <header className="header">
      <Link onClick={handleHomeClick} className="header__logo" to="/">
        ReactFilms
      </Link>
      <section className="header__actions">
        <nav className="header__nav">
          <Link onClick={handleHomeClick} className="header__nav-item" to="/">
            Home
          </Link>
          <Link onClick={handleTopClick} className="header__nav-item" to="/top">
            Top
          </Link>
          <Link
            onClick={handleRecentClick}
            className="header__nav-item"
            to="/recents"
          >
            Recents
          </Link>
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
