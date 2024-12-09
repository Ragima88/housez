import SearchBtn from "../SearchBtn/SearchBtn";
import "./form.scss";
const Form = () => {
  return (
    <form>
      <h2>Real Estate Inquiry Form</h2>
      <p>Design custom lead capture forms that integrate with the Houzez CRM</p>
      <div className="inquiry-input">
        <label htmlFor="inquiry">Inquiry Type</label>
        <select id="inquiry" name="inquiry">
          <option value="default">Select</option>
          <option value="Purchase">Purchase</option>
          <option value="Rent"> Rent</option>
          <option value="Sell"> Sell</option>
          <option value="Miss"> Miss</option>
          <option value="Evaluation"> Evaluation</option>
          <option value="Mortgage"> Mortgage</option>
        </select>
      </div>
      <div className="information-input">
        <label htmlFor="information">Information</label>
        <select id="information" name="information">
          <option value="default">I'm a</option>
          <option value="agent">I'm a real estate agent</option>
          <option value="owner"> I'm a property owner</option>
        </select>
      </div>
      <div className="name-input">
        <input id="first-name" type="text" placeholder="First Name" />
        <input id="last-name" type="text" placeholder="Last Name" />
      </div>
      <input type="email" placeholder="Email Address" />
      <div className="location-div">
        <div className="location-input">
          <label htmlFor="location">Location</label>
          <select id="location" name="location">
            <option value="default">Select</option>
            <option value="Chicago">Chicago</option>
            <option value="Chivilcoy">Chivilcoy</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Miami">Miami</option>
            <option value="New York">New York</option>
            <option value="Uyo">Uyo</option>
          </select>
        </div>
        <input type="text" placeholder="Zip Code" />
      </div>
      <div className="property-input">
        <label htmlFor="property">Property</label>
        <select id="property" name="property">
          <option value="default">Select type</option>
          <option value="commercial">commercial</option>
          <option value="-  Office">- Office</option>
          <option value="-  Shop">- Shop</option>
          <option value="Residential">Residential</option>
          <option value="-  Apartment">- Apartment</option>
          <option value="-  Condo">- Condo</option>
          <option value="-  Multi Family Home">- Multi Family Home</option>
          <option value="-  Single Family Home">- Single Family Home</option>
          <option value="-  Studio">- Studio</option>
          <option value="-  Villa">- Villa</option>
        </select>
      </div>
      <div className="max-min-inputs">
        <input id="max" type="number" placeholder="Max price" />
        <input id="min" type="number" placeholder="Minimum size (Sq Ft)" />
      </div>
      <div className="number-inputs">
        <input id="num-bed" type="number" placeholder="Number of beds" />
        <input id="num-bath" type="number" placeholder="Number of baths" />
      </div>
      <div className="checkbox-div">
        <label htmlFor="checkbox">GDPR Agreement</label>
        <span className="checkbox">
          <label htmlFor="checkbox">
            <input id="checkbox" type="checkbox" />
            <span>
              I consent to having this website store my submitted information
            </span>
          </label>
        </span>
      </div>
      <button className="form-btn" type="submit">
        Submit
      </button>
    </form>
  );
};
export default Form;
