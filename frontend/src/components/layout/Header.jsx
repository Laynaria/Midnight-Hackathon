import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import logobg from "../../assets/images/logobg.jpg";
import "./header.css";

export default function Header() {
  // To make current link green
  const [clickedLinked, setClickedLink] = useState(0);

  const [showNavTop, setShowNavTop] = useState(true);

  const hundleClickShowNav = () => {
    setShowNavTop(!showNavTop);
  };

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    function handleWindowResize() {
      // eslint-disable-next-line no-unused-expressions
      getWindowSize().innerWidth >= 850
        ? setShowNavTop(true)
        : setShowNavTop(false);
    }

    window.addEventListener("load", handleWindowResize);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <header className="flex justify-between">
      <div className="navLogo">
        <img alt="logo" src={logobg} />
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          onClick={hundleClickShowNav}
          onKeyDown={hundleClickShowNav}
          className="navTopButton"
        >
          <FontAwesomeIcon icon={faNavicon} />
        </div>
      </div>
      {showNavTop ? (
        <>
          <ul id="navTop" className="navTop">
            <Link to="/" onClick={() => setClickedLink(0)}>
              <li className={clickedLinked === 0 ? "clickedLinked" : ""}>
                Home
              </li>
            </Link>
            <Link to="/vehicles" onClick={() => setClickedLink(1)}>
              <li className={clickedLinked === 1 ? "clickedLinked" : ""}>
                Vehicle
              </li>
            </Link>
            <Link to="/contact" onClick={() => setClickedLink(2)}>
              <li className={clickedLinked === 2 ? "clickedLinked" : ""}>
                Contact
              </li>
            </Link>
          </ul>
          <Link className="navTopRight items-center pr-10 pl-10" to="/login">
            Account
          </Link>
        </>
      ) : null}
    </header>
  );
}