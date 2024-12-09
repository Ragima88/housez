import "./square-pic.scss";
import Image from "../Image/Image";
import { Link } from "react-router-dom";
const SquarePic = ({
  status,
  src,
  price,
  title,
  adress,
  bed,
  bath,
  car,
  area,
  type,
}) => {
  return (
    <div className="square-div">
      <Link className="square-img-link" to={""}>
        <Image className="square-img" src={src} />
        <div className="slider-overlay"></div>
        <span className="featured">Featured</span>
        <span className="position">{status}</span>
        <span className="price">${price}</span>
        <div className="tool-icons">
          <span className="arrows"></span>
          <span className="heart"></span>
          <span className="circle"></span>
        </div>
      </Link>
      <div className="square-content">
        <Link className="square-content-name" to={""}>
          {title}
        </Link>
        <p className="square-content-adress">{adress}</p>
        <div className="square-icons-div">
          <div className="square-icons">
            <span className="square-icon-bed">{bed}</span>
            <span className="square-icon-bath">{bath}</span>
            <span className="square-icon-car">{car}</span>
          </div>
          <div className="square-area">{`${area} sq ft`}</div>
        </div>

        <span className="square-desc-name">{type}</span>
      </div>
      <div className="square-author">
        <div className="square-author-name">Samuel Palmer</div>
        <div className="square-author-date">5 years ago</div>
      </div>
    </div>
  );
};
export default SquarePic;
