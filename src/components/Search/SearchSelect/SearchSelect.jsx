import "./search-select.scss";
const SearchSelect = ({ id, label, content }) => {
  return (
    <div id={id} className="search-select">
      <span className="search-label">{label}</span>
      <div className="search-input">{content}</div>
    </div>
  );
};
export default SearchSelect;
