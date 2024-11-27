import Search from "../../components/Search/Search";
import Section from "../../components/Section/Section";
import "./home.scss";
const Home = () => {
  return (
    <>
      <div className="hero-pic"></div>
      <Section className={"hero-section"}>
        <h2>Welcome To Houzez</h2>
        <p>
          Houzez is an innovative real estate WordPress theme that helps to
          ensure your website’s success in this super-competitive market.
        </p>
      </Section>
      <Search />
      <Section className={"discover-listing"}>
        <h2>Discover Our Featured Listings</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      </Section>
      <Section className={"res-com"}>
        <div className="residential">
          <div className="residential-left">
            <h2>Residential</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidi dunt
            </p>
            <span></span>
          </div>
          <div className="residential-middle"></div>
          <div className="residential-right"></div>
        </div>
        <div className="commercial">
          <div className="commercial-content">
            <h2>Commercial</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidi dunt
            </p>
            <span></span>
          </div>
        </div>
      </Section>
    </>
  );
};
export default Home;
