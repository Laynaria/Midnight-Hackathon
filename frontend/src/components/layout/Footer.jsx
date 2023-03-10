import voiture from "../../assets/images/voiture.png";
import instaicon from "../../assets/images/instaicon.svg";
import fbicon from "../../assets/images/fbicon.svg";
import linkdinicon from "../../assets/images/linkdinicon.svg";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <img className="voiture" alt="logo" src={voiture} />
      <p className="footext">
        Copyright © 2023 Green Rent - All rights reserved
      </p>
      <div className="footmob">
        <div className="triangle" />
        <div className="reseau">
          <img alt="logo" className="reso" src={instaicon} />
          <img alt="logo" className="reso" src={fbicon} />
          <img alt="logo" className="reso" src={linkdinicon} />
        </div>
      </div>
    </footer>
  );
}
