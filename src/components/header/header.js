import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <a className="header__logo" href="@">
        ReactFilms
      </a>
      <nav className="header__nav">
        <li className="header__nav-item">Home</li>
        <li className="header__nav-item">Top</li>
        <li className="header__nav-item">Recents</li>
      </nav>
    </header>
  );
};

export default Header;
