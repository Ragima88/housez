import Container from "../Container/Container";
import "./section.scss";

const Section = ({ className, children }) => {
  return (
    <section className={`section ${className}`}>
      <Container>
        <div className={`${className}-in`}>{children}</div>
      </Container>
    </section>
  );
};
export default Section;
