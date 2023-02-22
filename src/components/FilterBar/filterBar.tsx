import { useState } from "react";
import "./filterBar.scss";

interface Props {
  onSortChange: (sorting: string) => void;
}

export default function FilterBar({ onSortChange }: Props) {
  const [sorting, setSorting] = useState("relevance");

  function handleChange(newSorting: string) {
    setSorting(newSorting);
    onSortChange(newSorting);
  }

  return (
    <div className="filter">
      <label className="filter-label" htmlFor="sort">
        Sort
        <select
          name="sort"
          id="filter-sort"
          className="filter-select"
          onChange={(event) => handleChange(event?.target.value)}
          value={sorting}
        >
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
        </select>
      </label>
    </div>
  );
}
