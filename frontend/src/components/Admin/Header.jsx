import React from "react";
import "../../assets/css/admin/Admin.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import nopicture from "../../assets/img/user.svg";
import notification from "../../assets/img/notification.svg";

export default function Header() {
  return (
    <header>
      <div className="header-search">
        <div className="searchIcon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <input type="text" placeholder="Search vehicles or users" />
      </div>
      <div className="header-user">
        <img
          className="notification"
          alt="Notificaiton Bell"
          src={notification}
        />
        <img className="avatar" alt="User avatar" src={nopicture} />
      </div>
    </header>
  );
}
