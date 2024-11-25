import "./image.scss";
const Image = ({ className, src, alt, svg, onClick }) => {
  return (
    <div onClick={onClick} className={`image ${className}`}>
      {svg ? svg : <img src={src} alt={alt} />}
    </div>
  );
};
export default Image;
