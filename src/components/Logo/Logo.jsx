import "./logo.scss";
import Image from "../Image/Image";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-houzez-white.webp";
const Logo = () => {
  return (
    <Link className="logo-link" to={""}>
      <Image className={"logo-img"} src={logo} />
    </Link>
  );
};
export default Logo;
