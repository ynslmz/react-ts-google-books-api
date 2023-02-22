import { useState } from "react";
import "./search.scss";

interface Props {
  onSearch: (searchText: string) => void;
}

export default function Search({ onSearch }: Props) {
  const [searchText, setSearchText] = useState("");

  function handleSearchChange(searchText: string) {
    setSearchText(searchText);
    onSearch(searchText);
  }

  return (
    <div className="search">
      <div className="search-icon"></div>
      <input
        type="text"
        name="search"
        id="search"
        className="search-input fs-1"
        placeholder="Search Books"
        value={searchText}
        onChange={(event) => {
          handleSearchChange(event.target.value);
        }}
      />
    </div>
  );
}
