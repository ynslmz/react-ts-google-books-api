import Header from "../Header/header";
import Search from "../Search/search";
import FilterBar from "../FilterBar/filterBar";
import BookList from "../BookList/bookList";
import Modal from "../Modal/modal";
import BookDetail from "../BookDetail/bookDetail";
import Paginator from "../Paginator/paginator";
import { search } from "../../services/book.service";
import { useEffect, useState } from "react";
import { Book } from "../../types/book";
import { Loading } from "../Loading/loading";
import ModalContext from "../../Context/modalContext";

import "./app.scss";

function App() {
  const [loading, SetLoading] = useState(false);
  const [sorting, setSorting] = useState("relevance");
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<Book | null>(null);
  const [error, setError] = useState(false);

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
          }).catch((err) => {
            setError(true);
            throw err;
          });
          setError(false);
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

  function handleSettingModalData(data: any): void {
    console.log("handleSettingModalData", data);
    setModalData(data);
    setIsModalOpen(true);
  }

  return (
    <div className="app">
      <ModalContext.Provider value={handleSettingModalData}>
        <Header small={books.length > 0} />
        <Search onSearch={handleSearch} />
        <FilterBar onSortChange={handleSorting} />
        {!loading && (
          <div className="app-body">
            {error ? (
              <p className="error h6">Something went wrong...</p>
            ) : (
              <BookList books={books} />
            )}
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

        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setModalData(null);
          }}
        >
          <BookDetail book={modalData as Book} />
        </Modal>
      </ModalContext.Provider>
    </div>
  );
}

export default App;
