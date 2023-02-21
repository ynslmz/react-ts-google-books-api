import "./search.scss";
export default function Search() {
  return (
    <div className="search">
      <div className="search-icon"></div>
      <input
        type="text"
        name="search"
        id="search"
        className="search-input"
        placeholder="Search a Book"
      />
    </div>
  );
}
