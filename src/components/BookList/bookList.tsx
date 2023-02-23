import { Book } from "../../types/book";
import BookContainer from "../BookContainer/bookContainer";

import "./bookList.scss";

interface Props {
  books: Book[];
}
export default function BookList({ books }: Props) {
  return (
    <div className="book-list">
      {books.map((bk) => (
        <BookContainer key={bk.id} book={bk} />
      ))}
    </div>
  );
}
