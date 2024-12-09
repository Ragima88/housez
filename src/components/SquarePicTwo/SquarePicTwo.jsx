import { Link } from "react-router-dom";
import "./square-pic-two.scss";
import MoreDetails from "../MoreDetails/MoreDetails";
const SquarePicTwo = ({ className, title, subtitle, style = {} }) => {
  return (
    <Link className={`square-pic-two-link ${className}`} to={""} style={style}>
      <div className="square-pic-two-content">
        <div className="title-div">
          <div className="subtitle">{subtitle}</div>
          <div className="title">{title}</div>
        </div>
        <MoreDetails />
      </div>
    </Link>
  );
};
export default SquarePicTwo;
