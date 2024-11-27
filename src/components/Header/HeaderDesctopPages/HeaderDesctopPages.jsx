import Logo from "../../Logo/Logo";
import Nav from "../../Nav/Nav";
import Section from "../../Section/Section";
import Image from "../../Image/Image";
import "./header-desctop-pages.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import login from "../../../assets/icons/icon-login-blue.png";
import phoneIcon from "../../../assets/icons/icon-phone-blue.png";
const HeaderDesctopPages = () => {
  const [menu, setMenu] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/nav-menu");

      setMenu(data);
      return data;
    } catch (error) {
      console.error("Axios error:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Section className={"header-desctop-pages"}>
      <Logo />
      <div className="header-desctop-right">
        <Nav className={"nav-menu-desc-pages"} items={menu} />
        <div className="phone-div">
          <Image className={"phone-icon"} src={phoneIcon} />
          <a className="number" href="tel: (800) 987 6543">
            (800) 987 6543
          </a>
        </div>

        <button className="login-btn">
          <Image className={"login-img"} src={login} />
        </button>
        <Link to={""} className="desctop-btn">
          Create a listing
        </Link>
      </div>
    </Section>
  );
};
export default HeaderDesctopPages;
