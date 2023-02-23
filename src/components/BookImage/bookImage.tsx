import { ImageLinks } from "../../types/book";
import "./bookImage.scss";
interface Props {
  imageLinks: ImageLinks | null;
}

export function BookImage({ imageLinks }: Props) {
  const imgLinks: ImageLinks = {
    ...{
      smallThumbnail: "",
      thumbnail: "",
    },
    ...imageLinks,
  };

  const bookImageUrl = imgLinks.smallThumbnail || imgLinks.thumbnail || "";
  const noImage = "No image available";
  return (
    <div className={`book-img ${bookImageUrl.length > 0 ? "" : "no-img"}`}>
      {bookImageUrl.length > 0 ? (
        <img src={bookImageUrl} alt={noImage} />
      ) : (
        <span className="fs-1">{noImage}</span>
      )}
    </div>
  );
}
