import "./header.scss";

const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <a className="header__logo" href="@">
        ReactFilms
      </a>
      <section className="header__actions">
        <nav className="header__nav">
          <li className="header__nav-item">Home</li>
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
