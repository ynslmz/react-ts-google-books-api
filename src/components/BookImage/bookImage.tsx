import { ImageLinks } from "../../types/book";
import "./bookImage.scss";
interface Props {
  imageLinks: ImageLinks | null;
  size?: string;
}

export function BookImage({ imageLinks, size = "" }: Props) {
  const imgLinks: ImageLinks = {
    ...{
      smallThumbnail: "",
      thumbnail: "",
    },
    ...imageLinks,
  };

  const bookImageUrl =
    (size === "big" ? imgLinks.thumbnail : imgLinks.smallThumbnail) || "";
  const noImage = "No image available";
  return (
    <div
      className={`book-img ${bookImageUrl.length > 0 ? "" : "no-img"} ${size}`}
    >
      {bookImageUrl.length > 0 ? (
        <img src={bookImageUrl} alt={noImage} />
      ) : (
        <span className="fs-1">{noImage}</span>
      )}
    </div>
  );
}
