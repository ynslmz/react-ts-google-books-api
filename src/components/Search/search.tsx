import { useState } from "react";
import "./search.scss";

interface Props {
  onSearch: (searchText: string) => void;
}

export default function Search({ onSearch }: Props) {
  const [searchText, setSearchText] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(searchText);
  }

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }

  return (
    <div className="search">
      <div className="search-icon"></div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          className="search-input fs-1"
          placeholder="Search Books"
          value={searchText}
          onChange={handleSearchChange}
        />
      </form>
    </div>
  );
}
