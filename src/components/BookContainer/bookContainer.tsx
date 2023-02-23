import { Book } from "../../types/book";
import { BookImage } from "../BookImage/bookImage";
import "./bookContainer.scss";
interface Props {
  book: Book;
}

export default function BookContainer({ book }: Props) {
  function handleShowMoreDetail() {
    console.log(`Show modal for ${book.id}`);
  }

  return (
    <div className="book">
      <BookImage imageLinks={book.volumeInfo.imageLinks} />
      <div className="book-detail">
        <h5>{book.volumeInfo.title}</h5>

        <span className="fs-2">
          {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
        </span>

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
