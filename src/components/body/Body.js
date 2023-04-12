import "../body/Body.css";
import Welcome from "../welcome/Welcome";
import Panels from "../panels/Panels";
import { motion } from "framer-motion";

function Body() {
  return (
    <div className="body">
      <Welcome />
      <Panels />
    </div>
  );
}

export default Body;
