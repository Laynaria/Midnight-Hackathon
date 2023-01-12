import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import logobg from "../../assets/images/logobg.jpg";
import "./header.css";

export default function Header() {
  const sampleLocation = useLocation();
  console.warn(sampleLocation);

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

  const navTopElem = [
    {
      name: "home",
      url: "/",
    },
    {
      name: "vehicle",
      url: "/vehicles",
    },
    {
      name: "contact",
      url: "/contact",
    },
  ];

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
            {navTopElem.map((item) => (
              <Link to={item.url}>
                <li
                  key={item.name}
                  className={
                    sampleLocation.pathname === item.url ? "clickedLinked" : ""
                  }
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
          <Link className="navTopRight items-center pr-10 pl-10" to="/login">
            Account
          </Link>
        </>
      ) : null}
    </header>
  );
}
