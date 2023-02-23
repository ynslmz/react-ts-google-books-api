import { Book as BK } from "../../types/book";
import Book from "../Book/book";

import "./bookList.scss";

interface Props {
  books: BK[];
}
export default function BookList({ books }: Props) {
  return (
    <div className="book-list">
      {books.map((bk) => (
        <Book key={bk.id} book={bk} />
      ))}{" "}
    </div>
  );
}
