import "./property-square.scss";
import Image from "../Image/Image";
import { Link } from "react-router-dom";
const PropertySquare = ({ status, src, price, title, bed, bath, car }) => {
  return (
    <Link className="property-square">
      <Image className={"property-img"} src={src} />
      <div className="slider-overlay"></div>
      <div className="properties-content">
        <span className="properties-position">{status}</span>
        <span className="properties-title">{title}</span>
        <span className="properties-price">${price}</span>
        <div className="properties-icons">
          <span className="square-icon-bed">{bed}</span>
          <span className="square-icon-bath">{bath}</span>
          <span className="square-icon-car">{car}</span>
        </div>
      </div>
    </Link>
  );
};
export default PropertySquare;
