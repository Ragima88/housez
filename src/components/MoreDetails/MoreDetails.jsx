import "./more-details.scss";
import Image from "../Image/Image";
import arrowIcon from "../../assets/icons/icon-arrow-head.png";
const MoreDetails = () => {
  return (
    <div className="details-link" to={""}>
      <div className="details-link-title">More details</div>
      <Image className={"details-img"} src={arrowIcon} />
    </div>
  );
};
export default MoreDetails;
