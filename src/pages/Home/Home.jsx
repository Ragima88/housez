import { useEffect, useState } from "react";
import Form from "../../components/Form/Form";
import Search from "../../components/Search/Search";
import Section from "../../components/Section/Section";
import Slider from "../../components/Slider/Slider";
import SquarePicTwo from "../../components/SquarePicTwo/SquarePicTwo";
import "./home.scss";
import axios from "axios";
import PropertySquare from "../../components/PropertySquare/PropertySquare";
import Image from "../../components/Image/Image";
import agent1 from "../../assets/images/agent-1.jpg";
import agent2 from "../../assets/images/agent-2.jpg";
import agent3 from "../../assets/images/agent-3.jpg";
import testimonial1 from "../../assets/images/testimonial-1.jpg";
import testimonial2 from "../../assets/images/testimonial-2.jpg";
import testimonial3 from "../../assets/images/testimonial-3.jpg";
import partner1 from "../../assets/images/partner-01.jpg";
import partner2 from "../../assets/images/partner-02.jpg";
import partner3 from "../../assets/images/partner-03.jpg";
import partner4 from "../../assets/images/partner-04.jpg";
import partner5 from "../../assets/images/partner-05.jpg";

const Home = () => {
  const [res, setRes] = useState([]);
  const [cities, setCities] = useState([]);
  const [property, setProperty] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/res-com");
      setRes(data);
      return data;
    } catch (error) {
      console.error("Axios error:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData2 = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/properties");

      setProperty(data);
      return data;
    } catch (error) {
      console.error("Axios error:", error);
    }
  };
  useEffect(() => {
    fetchData2();
  }, []);
  const fetchData3 = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/cities");
      setCities(data);
      return data;
    } catch (error) {
      console.error("Axios error:", error);
    }
  };
  useEffect(() => {
    fetchData3();
  }, []);
  return (
    <>
      <Section className={"hero-section"}>
        <div className="hero-pic"></div>
        <div className="overlay"></div>
        <div className="hero-content">
          <h2>Welcome To Houzez</h2>
          <p>
            Houzez is an innovative real estate WordPress theme that helps to
            ensure your website’s success in this super-competitive market.
          </p>
        </div>
      </Section>
      <Search />
      <Section className={"discover-listing"}>
        <h2>Discover Our Featured Listings</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <Slider />
      </Section>
      <Section className={"res-com"}>
        <div className="residential">
          <div className="residential-in">
            <div className="residential-left">
              <h2>Residential</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incidi dunt
              </p>
              <span></span>
              <SquarePicTwo
                title={res[0]?.type}
                subtitle={res[0]?.property}
                style={{
                  backgroundImage: `url(${res[0]?.src})`,
                }}
              />
            </div>
            <div className="residential-middle">
              <SquarePicTwo
                title={res[1]?.type}
                subtitle={res[1]?.property}
                style={{
                  backgroundImage: `url(${res[1]?.src})`,
                }}
              />
            </div>
            <div className="residential-right">
              <SquarePicTwo
                title={res[2]?.type}
                subtitle={res[2]?.property}
                style={{
                  backgroundImage: `url(${res[2]?.src})`,
                }}
              />
              <SquarePicTwo
                title={res[3]?.type}
                subtitle={res[3]?.property}
                style={{
                  backgroundImage: `url(${res[3]?.src})`,
                }}
              />
            </div>
          </div>
        </div>
        <div className="commercial">
          <div className="commercial-in">
            <div className="commercial-content">
              <h2>Commercial</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incidi dunt
              </p>
              <span></span>
            </div>
            <SquarePicTwo
              title={res[4]?.type}
              subtitle={res[4]?.property}
              style={{
                backgroundImage: `url(${res[4]?.src})`,
              }}
            />
            <SquarePicTwo
              title={res[5]?.type}
              subtitle={res[5]?.property}
              style={{
                backgroundImage: `url(${res[5]?.src})`,
              }}
            />
          </div>
        </div>
      </Section>
      <Section className={"form-section"}>
        <div className="background-overlay"></div>
        <div className="form-section-content">
          <div className="form-section-content-zero">
            <h2>Why Houzez Is The Perfect Choice?</h2>
            <div className="line"></div>
          </div>
          <div className="form-section-content-text">
            <span>01.</span>
            <h3>Suitable For Agents And Agencies</h3>
            <p>
              Never miss a sale! It's never been easier to turn leads into real
              customers
            </p>
            <div className="line"></div>
          </div>
          <div className="form-section-content-text">
            <span>02.</span>
            <h3>Design Custom Leads Capture Forms</h3>
            <p>
              Keep track of your leads without having to pay for an external CRM
            </p>
            <div className="line"></div>
          </div>
          <div className="form-section-content-text">
            <span>03.</span>
            <h3>Highly Customizable Theme</h3>
            <p>
              Customize your website according to your expectations and
              requirements
            </p>
            <div className="line"></div>
          </div>
        </div>
        <Form />
      </Section>
      <Section className={"properties"}>
        <h2>Check Our Selection Of Finest Properties</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <div className="property-sliders">
          {property.map((i) => {
            return (
              <PropertySquare
                key={i.id}
                status={i.status}
                price={i.price}
                title={i.title}
                src={i.src}
                bed={i.bed}
                bath={i.bath}
                car={i.car}
              />
            );
          })}
        </div>
      </Section>
      <Section className={"cities"}>
        <div className="cities-content">
          <h2>Explore Cities</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
        <div className="cities-slider">
          <SquarePicTwo
            className={"cities-pic"}
            title={cities[0]?.city}
            subtitle={cities[0]?.property}
            style={{
              backgroundImage: `url(${cities[0]?.src})`,
            }}
          />
          <SquarePicTwo
            className={"cities-pic"}
            title={cities[1]?.city}
            subtitle={cities[1]?.property}
            style={{
              backgroundImage: `url(${cities[1]?.src})`,
            }}
          />
          <SquarePicTwo
            className={"cities-pic"}
            title={cities[2]?.city}
            subtitle={cities[2]?.property}
            style={{
              backgroundImage: `url(${cities[2]?.src})`,
            }}
          />
          <SquarePicTwo
            className={"cities-pic"}
            title={cities[3]?.city}
            subtitle={cities[3]?.property}
            style={{
              backgroundImage: `url(${cities[3]?.src})`,
            }}
          />
        </div>
      </Section>
      <Section className={"agents"}>
        <h2>Meet Our Agents</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <div className="agents-content">
          <div className="agent">
            <Image className={"agent-pic"} src={agent1} />
            <strong className="agent-name">Vincent Fuller</strong>

            <div className="agent-company">
              Real Estate Agent , Country House Real Estate
            </div>
            <div className="agent-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              porta justo eget risus consectetur,...
            </div>
            <a className="agent-profile" href="">
              View Profile
            </a>
          </div>
          <div className="agent">
            <Image className={"agent-pic"} src={agent2} />
            <strong className="agent-name">Brittany Watkins</strong>
            <div className="agent-company">
              Company Agent , All American Real Estate
            </div>
            <div className="agent-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              porta justo eget risus consectetur,...
            </div>
            <a className="agent-profile" href="">
              View Profile
            </a>
          </div>
          <div className="agent">
            <Image className={"agent-pic"} src={agent3} />
            <strong className="agent-name">Michelle Ramirez</strong>
            <div className="agent-company">
              Company Agent , Modern House Real Estate
            </div>
            <div className="agent-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              porta justo eget risus consectetur,...
            </div>
            <a className="agent-profile" href="">
              View Profile
            </a>
          </div>
        </div>
      </Section>
      <Section className={"testimonials"}>
        <h2>Testimonials</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <div className="testimonials-content">
          <div className="testimonial">
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="testimonial-author">
              <Image className={"testimonial-pic"} src={testimonial1} />
              <div className="testimonial-info">
                <div className="testimonial-name">Roy Bennett</div>
                <div className="testimonial-job">Manager, Company Inc.</div>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="testimonial-author">
              <Image className={"testimonial-pic"} src={testimonial2} />
              <div className="testimonial-info">
                <div className="testimonial-name">Kenya Soval</div>
                <div className="testimonial-job">Realtor, Company Inc.</div>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="testimonial-author">
              <Image className={"testimonial-pic"} src={testimonial3} />
              <div className="testimonial-info">
                <div className="testimonial-name">Kathleen Peterson</div>
                <div className="testimonial-job">Manager, Company Inc.</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className={"partners"}>
        <Image className={"partners-logo"} src={partner1} />
        <Image className={"partners-logo"} src={partner2} />
        <Image className={"partners-logo"} src={partner3} />
        <Image className={"partners-logo"} src={partner4} />
        <Image className={"partners-logo"} src={partner5} />
      </Section>
    </>
  );
};
export default Home;
