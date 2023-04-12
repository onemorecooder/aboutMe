import "../header/Header.css";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className="navBar">
      <FaCode size={42} color="white" />
    </div>
  );
}

export default Header;
