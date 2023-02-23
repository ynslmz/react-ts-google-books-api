import Header from "../Header/header";
import Search from "../Search/search";
import FilterBar from "../FilterBar/filterBar";
import { search } from "../../services/book.service";

import "./app.scss";
import { useEffect, useState } from "react";
import { Book } from "../../types/book";
import BookList from "../BookList/bookList";
import { Paginator } from "../Paginator/paginator";
import { Loading } from "../Loading/loading";

function App() {
  const [loading, SetLoading] = useState(false);
  const [sorting, setSorting] = useState("relevance");
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        if (query.length > 0) {
          SetLoading(true);
          const response = await search({
            query: query,
            startIndex: startIndex,
            orderBy: sorting,
            pageSize: 10,
          });
          setBooks(!!response.items ? response.items : []);
          !!response.totalItems && setTotalItems(response.totalItems);
        }
      } catch (error) {
        console.error(error);
      } finally {
        SetLoading(false);
      }
    }
    fetchData();
  }, [query, sorting, startIndex]);

  function handleSearch(searchText: string): void {
    setQuery(searchText);
    setStartIndex(0);
  }

  function handlePageChange(newIndex: number): void {
    setStartIndex(newIndex);
  }

  function handleSorting(sorting: string): void {
    setSorting(sorting);
    setStartIndex(0);
  }

  return (
    <div className="app">
      <Header small={books.length > 0} />
      <Search onSearch={handleSearch} />
      <FilterBar onSortChange={handleSorting} />
      {!loading && (
        <div className="app-body">
          <BookList books={books} />
          <div className="pagination">
            {totalItems > 0 && (
              <Paginator
                totalItems={totalItems}
                startIndex={startIndex}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      )}
      {loading && <Loading />}
    </div>
  );
}

export default App;
