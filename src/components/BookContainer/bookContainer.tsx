import { useContext } from "react";
import ModalContext from "../../Context/modalContext";
import { Book } from "../../types/book";
import { BookImage } from "../BookImage/bookImage";
import "./bookContainer.scss";
interface Props {
  book: Book;
}

export default function BookContainer({ book }: Props) {
  const setModalData = useContext(ModalContext);

  function handleShowMoreDetail() {
    setModalData(book);
  }

  return (
    <div className="book">
      <BookImage imageLinks={book.volumeInfo.imageLinks} />
      <div className="book-detail">
        <h5 className="title">{book.volumeInfo.title}</h5>
        <p className="fs-1">
          {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
        </p>
        <p className="fs-1 description">{book.volumeInfo.description}</p>
        <button
          className="book-detail-button fs-1"
          type="button"
          onClick={handleShowMoreDetail}
        >
          Show More Detail
        </button>
      </div>
    </div>
  );
}
