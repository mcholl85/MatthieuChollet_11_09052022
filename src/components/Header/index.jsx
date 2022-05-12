import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} alt="logo kasa" />
      </Link>
      <nav className="header__navbar">
        <NavLink className="header__navbar__link medium" to="/">
          Accueil
        </NavLink>
        <NavLink className="header__navbar__link medium" to="/about">
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
