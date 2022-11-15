import React from "react";
import "../styles/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__linkContainer">
        <div className="footer__links">
          <h3 className="footer__linksTitle">Get to Know Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
        </div>
        <div className="footer__links">
          <h3 className="footer__linksTitle">Connect with Us</h3>
          <FacebookIcon className="footer__link">About Us</FacebookIcon>
          <TwitterIcon className="footer__link">Facebook</TwitterIcon>
          <LinkedInIcon className="footer__link">Sell on Amazon</LinkedInIcon>
        </div>
        <div className="footer__links"></div>
      </div>
    </footer>
  );
};

export default Footer;
