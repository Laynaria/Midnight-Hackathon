import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faUser, faRoad } from "@fortawesome/free-solid-svg-icons";
import "./cardCarRent.css";

export default function CardCarRent({ elem }) {
  return (
    <div className="card-rent">
      <div
        style={{ backgroundImage: `url(/src/assets/images/${elem.img})` }}
        className="card-rent-head"
      />
      <div className="card-rent-body">
        <div className="title1">{elem.name}</div>
        <div className="title2">Start from {elem.priceStart} / day</div>
        <div className="button">RENT IT</div>
      </div>
      <div className="card-rent-foot">
        <div className="w-1/3">
          <FontAwesomeIcon icon={faCar} /> {elem.year}
        </div>
        <div className="w-1/3">
          <FontAwesomeIcon icon={faUser} /> {elem.passenger}
        </div>
        <div className="w-1/3">
          <FontAwesomeIcon icon={faRoad} /> {elem.km}
        </div>
      </div>
    </div>
  );
}
