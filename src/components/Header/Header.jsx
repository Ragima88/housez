import "./header.scss";
import HeaderDesctop from "./HeaderDesctop/HeaderDesctop";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
const Header = () => {
  return (
    <>
      <HeaderMobile />
      <HeaderDesctop />
    </>
  );
};
export default Header;
