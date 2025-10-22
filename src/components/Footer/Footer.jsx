import "./Footer.css";
import { useLocation } from "react-router-dom";

const Footer = ({ adminClick, onLogOut, contactMeClick }) => {
  const location = useLocation();
  const currentPage = location.pathname;
  return (
    <footer className="footer">
      {currentPage === "/admin" ? (
        <button onClick={onLogOut} className="footer__button">
          Log out
        </button>
      ) : (
        <button onClick={adminClick} className="footer__button">
          Admin
        </button>
      )}
      <div className="footer__copyrights">2025 © Ezra Bales</div>
      <button onClick={contactMeClick} className="footer__button">
        Contact Ezra Bales
      </button>
    </footer>
  );
};
export default Footer;
