import { motion } from "framer-motion";
import "../icons/Icons.css";

function Icons({ icon: Icon }) {
  return (
    <motion.div
      className="icon"
      whileHover={{
        scale: 1.2,
      }}
      whileTap={{ scale: 0.9 }}
    >
      {Icon}
    </motion.div>
  );
}

export default Icons;
