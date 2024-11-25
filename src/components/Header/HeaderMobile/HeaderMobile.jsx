import Image from "../../Image/Image";
import Logo from "../../Logo/Logo";
import Section from "../../Section/Section";
import Hamburger from "../HeaderMobile/Hamburger/Hamburger";
import login from "../../../assets/icons/icon-login-white.png";
import "./header-mobile.scss";
const HeaderMobile = () => {
  return (
    <Section className={"header-mobile"}>
      <Hamburger />
      <Logo />
      <button className="login-btn">
        <Image className={"login-img"} src={login} />
      </button>
    </Section>
  );
};
export default HeaderMobile;
