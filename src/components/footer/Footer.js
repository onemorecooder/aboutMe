import "../footer/Footer.css";
import Icons from "../icons/Icons";

import {
  SiBuymeacoffee,
  SiLinkedin,
  SiSteam,
  SiTwitter,
  SiInstagram,
  SiFacebook,
} from "react-icons/si";

import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="footer">
      <div className="iconsDiv">
        <Icons icon={<SiBuymeacoffee size={30} color="fa8072" />} />
        <Icons icon={<SiLinkedin size={30} color="fa8072" />} />
        <Icons icon={<SiSteam size={30} color="fa8072" />} />
        <Icons icon={<SiTwitter size={30} color="fa8072" />} />
        <Icons icon={<SiInstagram size={30} color="fa8072" />} />
        <Icons icon={<SiFacebook size={30} color="fa8072" />} />
      </div>
    </div>
  );
}

export default Footer;
