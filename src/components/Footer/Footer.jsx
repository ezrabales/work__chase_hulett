import "./Footer.css";

const Footer = ({ logInClick, contactMeClick }) => {
  return (
    <div className="footer">
      <button onClick={logInClick} className="footer__button">
        Admin Sign In
      </button>
      <div className="footer__copyrights">2025 © Ezra Bales</div>
      <button onClick={contactMeClick} className="footer__button">
        Contact Ezra Bales
      </button>
    </div>
  );
};
export default Footer;
