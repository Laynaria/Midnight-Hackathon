import { useNavigate } from "react-router-dom";

import { Player } from "@lottiefiles/react-lottie-player";

import errorCar from "../assets/lottie/carerror.json";

import "@assets/css/Error/Error.css";

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="error-notfound">
      <Player
        loop
        autoplay
        src={errorCar}
        style={{ height: "300px", width: "300px" }}
      />
      <h1>404</h1>
      <h2>
        It seems that you have had a road accident ... but don't panic, our
        technicians are on the case
      </h2>
      <button
        onClick={() => navigate("/")}
        type="button"
        className="btn btn-primary"
      >
        Go back
      </button>
      {/*
        __                 
        '. \  🅷🅴🅻🅻🅾, 🅼🆈 🅽🅰🅼🅴 🅸🆂 🅴🅻🅼🅴🆁 ❗
        '- \               
          / /_         .---.
        / | \\,.\/--.//    )
        |  \//        )/  / 
          \  ' ^ ^    /    )____.----..  6
          '.____.    .___/            \._) 
              .\/.                      )
              '\                       /
              _/ \/    ).        )    (
              /#  .!    |        /\    /
              \  C// #  /'-----''/ #  / 
          .   'C/ |    |    |   |    |mrf  ,
          \), .. .'OOO-'. ..'OOO'OOO-'. ..\(,
      */}
    </div>
  );
}
