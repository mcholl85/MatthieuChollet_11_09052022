import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="logo kasa" />
      <nav className="header__navbar">
        <Link className="header__navbar__link medium" to="/">
          Accueil
        </Link>
        <Link className="header__navbar__link medium" to="/about">
          A Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
