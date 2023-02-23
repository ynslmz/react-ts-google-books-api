import { Book } from "../../types/book";
import { BookImage } from "../BookImage/bookImage";
import "./bookDetail.scss";
interface Props {
  book: Book;
}
export default function BookDetail({ book }: Props) {
  return (
    <div className="details">
      <BookImage imageLinks={book.volumeInfo.imageLinks} size="big" />
      <div className="details-volume">
        <h5>
          {`${book.volumeInfo.title}, ${new Date(
            book.volumeInfo.publishedDate
          ).getFullYear()} `}
        </h5>
        <p className="fs-2">
          <span>Author : </span>
          {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
        </p>
        <p className="fs-2">
          <span>Publisher : </span>
          {book.volumeInfo.publisher || "Unknown Publisher"}
        </p>
        <p className="fs-1">{book.volumeInfo.description}</p>
      </div>
    </div>
  );
}
