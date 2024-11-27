import SearchBtn from "../SearchBtn/SearchBtn";
import "./search.scss";
import SearchSelect from "./SearchSelect/SearchSelect";
const Search = () => {
  const selects = [
    {
      id: 1,
      label: "looking for",
      content: "10 types selected",
    },
    {
      id: 2,
      label: "location",
      content: "all cities",
    },
    {
      id: 3,
      label: "Property size",
      content: "bedrooms",
    },
    {
      id: 4,
      label: "your budget",
      content: "max. price",
    },
  ];
  return (
    <div className="search-wrapper">
      <div className="search-top">
        <div className="search-title">All Status</div>
        <div className="search-title">For Rent</div>
        <div className="search-title">For Sale</div>
      </div>
      <div className="search-bottom">
        <div className="search-bottom-inputs">
          {selects.map((i) => {
            return (
              <SearchSelect key={i.id} label={i.label} content={i.content} />
            );
          })}
        </div>
        <SearchBtn />
      </div>
    </div>
  );
};
export default Search;
