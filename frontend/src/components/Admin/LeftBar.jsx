import React, { useState, useEffect } from "react";
import "../../assets/css/admin/Admin.css";
import {
  faHome,
  faUsers,
  faFolderTree,
  faGear,
  faNewspaper,
    faCar,
} from "@fortawesome/free-solid-svg-icons";
import LeftListElement from "@components/Admin/LeftListElement";
import { Link } from "react-router-dom";
import adminlogo from "../../assets/img/Green-rent-logo.png";

const navList = [
  {
    name: "Dashboard",
    icon: faHome,
    href: "",
  },
  {
    name: "Vehicles",
    icon: faCar,
    href: "vehicles",
  },
  {
    name: "Maintenance",
    icon: faNewspaper,
    href: "maintenance",
  },
  {
    name: "Bookings",
    icon: faFolderTree,
    href: "bookings",
  },
  {
    name: "Users",
    icon: faUsers,
    href: "users",
  },
  {
    name: "Settings",
    icon: faGear,
    href: "settings",
  },
];

function LeftBar() {
  const [showNav, setShowNav] = useState(true);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    function handleWindowResize() {
      // eslint-disable-next-line no-unused-expressions
      getWindowSize().innerWidth >= 800 ? setShowNav(true) : setShowNav(false);
    }

    window.addEventListener("load", handleWindowResize);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className={showNav ? null : "hideNav"}>
      <div className="nav-header">
        <img src={adminlogo} alt="Green Rent Logo" />
      </div>
      <div className="navList">
        <ul>
          {navList.map((e, index) => (
            <LeftListElement
              index={index}
              icon={e.icon}
              name={e.name}
              href={e.href}
            />
          ))}
        </ul>
      </div>
      <div className="logout">
        <Link to="/login">
          <div className="button-logout">Log out</div>
        </Link>
      </div>
    </nav>
  );
}

export default LeftBar;
