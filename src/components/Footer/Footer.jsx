import "./footer.scss";
import Section from "../Section/Section";
import Logo from "../Logo/Logo";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Image from "../Image/Image";
import location from "../../assets/icons/icons-location.png";
import phone from "../../assets/icons/icon-phones.png";
import letter from "../../assets/icons/icons-letter.png";
const Footer = () => {
  const [social, setSocial] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/social-icons");
      setSocial(data);
      return data;
    } catch (error) {
      console.error("Axios error:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Section className={"footer-top"}>
        <div className="discover">
          <h2>Discover</h2>
          <Link className="discover-link" to={""}>
            Miami
          </Link>
          <Link className="discover-link" to={""}>
            Los Angeles
          </Link>
          <Link className="discover-link" to={""}>
            Chicago
          </Link>
          <Link className="discover-link" to={""}>
            New York
          </Link>
        </div>
        <div className="contact-us">
          <h2>Contact Us</h2>
          <div className="location-div">
            <Image className={"footer-icon"} src={location} />
            <div className="contact-us-desc">
              {" "}
              774 NE 84th St Miami, FL 33879
            </div>
          </div>
          <div className="contact-num-div">
            <Image className={"footer-icon"} src={phone} />
            <div className="contact-us-desc"> 879 456 1349</div>
          </div>
          <div className="email-div">
            <Image className={"footer-icon"} src={letter} />
            <Link to={""} className="contact-us-desc">
              email@houzez.co
            </Link>
          </div>
        </div>
        <div className="newsletter">
          <h2>Newsletter</h2>
          <div className="footer-input-div">
            <input
              className="footer-input"
              type="text"
              placeholder="Enter your email"
            />
            <button className="footer-btn" type="submit">
              Submit
            </button>
          </div>
          <p>
            Houzez is a premium WordPress theme for Designers & Real Estate
            Agents.
          </p>
        </div>
      </Section>
      <Section className={"footer-bottom"}>
        <p>© Houzez - All rights reserved</p>
        <Logo />
        <div className="social-icons">
          {social.map((i) => {
            return (
              <Link key={i.id} className="social-icons-link" to={i.to}>
                <Image className="social-icons-img" src={i.src} />
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
};
export default Footer;
