import "../welcome/Welcome.css";
import { motion } from "framer-motion";
import Icons from "../icons/Icons";
import People from "./img/people.png";

import { SiCodeforces } from "react-icons/si";

function Welcome() {
  return (
    <div className="welcomeContainer">
      <div className="welcome">
        <h1>Welcome</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="mainButton">¡Obtén más información!</button>
      </div>
      <div className="img">
        <img src={People} alt="People image"></img>
      </div>
    </div>
  );
}

export default Welcome;
