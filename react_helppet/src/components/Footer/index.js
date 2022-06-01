import "./styles.sass";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook-icon.png";
import twitter from "../../assets/twitter-icon.png";
import instagram from "../../assets/instagram-icon.png";
import youtube from "../../assets/youtube-icon.png";

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer_terms">
    <p>Frequent questions</p>
      
      <div className="footer_terms_social_icons">
      <p>Social networks:</p>
        <a href="https://www.facebook.com/">
          <img
            className="footer_terms_social_icons_1"
            src={facebook}
            alt="facebook"
          />
        </a>
        <a href="https://www.instagram.com/">
          <img
            className="footer_terms_social_icons_1"
            src={instagram}
            alt="instagram"
          />
        </a>
        <a href="https://twitter.com/">
          <img
            className="footer_terms_social_icons_1"
            src={twitter}
            alt="twitter"
          />
        </a>
        <a href="https://www.youtube.com/">
          <img
            className="footer_terms_social_icons_1"
            src={youtube}
            alt="youtube"
          />
        </a>
      </div>
      </div>
    </div>
  );
};

export default Footer;
