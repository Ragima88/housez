import "./logo.scss";
import Image from "../Image/Image";
import { Link, useLocation } from "react-router-dom";
import logoWhite from "../../assets/images/logo-houzez-white.webp";
import logoBlue from "../../assets/images/logo-houzez-blue.webp";
const Logo = () => {
  const location = useLocation();
  const logoSrc = location.pathname === "/" ? logoWhite : logoBlue;
  return (
    <Link className="logo-link" to={""}>
      <Image className={"logo-img"} src={logoSrc} />
    </Link>
  );
};
export default Logo;
