import "./header.scss";
import HeaderDesctop from "./HeaderDesctop/HeaderDesctop";
import HeaderDesctopPages from "./HeaderDesctopPages/HeaderDesctopPages";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import { useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <header>
      <HeaderMobile />
      {isHomePage ? <HeaderDesctop /> : <HeaderDesctopPages />}
    </header>
  );
};
export default Header;
