import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LeftListElement({ icon, name, classes, href }) {
  return (
    <Link to={`/admin/${href}`}>
      <li className={classes}>
        <FontAwesomeIcon className="navListIcon" icon={icon} />{" "}
        <span className="navListText">{name}</span>
      </li>
    </Link>
  );
}
