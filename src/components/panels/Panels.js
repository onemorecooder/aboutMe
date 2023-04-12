import "../panels/Panels.css";
import { motion } from "framer-motion";

function Panels() {
  return (
    <div className="panelsContainer">
      <motion.div
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{ scale: 0.9 }}
        className="panel"
      ></motion.div>
      <motion.div
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{ scale: 0.9 }}
        className="panel"
      ></motion.div>
      <motion.div
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{ scale: 0.9 }}
        className="panel"
      ></motion.div>
    </div>
  );
}

export default Panels;
