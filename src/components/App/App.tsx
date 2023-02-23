import Header from "../Header/header";
import Search from "../Search/search";
import FilterBar from "../FilterBar/filterBar";
import { search } from "../../services/book.service";

import "./app.scss";
import { useEffect, useState } from "react";
import { Book } from "../../types/book";

function App() {
  const [sorting, setSorting] = useState("relevance");
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        if (query.length > 0) {
          const response = await search({
            query: query,
            startIndex: "0",
            orderBy: sorting,
            pageSize: "10",
          });
          setBooks(response.items);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [query, sorting]);

  return (
    <div className="app">
      <Header small={books.length > 0} />
      <Search
        onSearch={(searchText) => {
          setQuery(searchText);
        }}
      />
      <FilterBar
        onSortChange={(sorting) => {
          setSorting(sorting);
        }}
      />
      <div className="app-body">books : {JSON.stringify(books, null, 4)}</div>
    </div>
  );
}

export default App;
