import { Book } from "../../types/book";
import { BookImage } from "../BookImage/bookImage";
import "./bookContainer.scss";
interface Props {
  book: Book;
}

export default function BookContainer({ book }: Props) {
  return (
    <div className="book">
      <BookImage imageLinks={book.volumeInfo.imageLinks} />
      <div className="detail">
        <h6>{book.volumeInfo.title}</h6>
        <p className="h6">{book.volumeInfo.authors?.join(", ")}</p>
      </div>
      <div className="view-detail">
        <button type="button">Show Detail</button>
      </div>
    </div>
  );
}
