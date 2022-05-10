import logoFooter from '../../assets/img/logo_footer.png';

function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="logo footer" />
      <p className="footer__text medium">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
