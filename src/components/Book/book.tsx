import { Book as BK } from "../../types/book";
import "./book.scss";
interface Props {
  book: BK;
}

export default function Book({ book }: Props) {
  const bookImageUrl = book.volumeInfo.imageLinks?.smallThumbnail || "";
  const noImage = "No image is available";
  return (
    <div className="book">
      <div className="book-img">
        <img src={bookImageUrl} alt={noImage} />
      </div>
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
