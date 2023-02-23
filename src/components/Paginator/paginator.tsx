import "./paginator.scss";

interface Props {
  totalItems: number;
  startIndex: number;
  onPageChange: (newIndex: number) => void;
}

export function Paginator({ totalItems, startIndex, onPageChange }: Props) {
  const pages = Array(Math.floor(totalItems / 10) + 1).fill("");
  const currentPage = Math.floor(startIndex / 10);

  function handleClick(event: any) {
    const startIndex = +event.target.closest("button").dataset.pageId || 0;
    onPageChange(startIndex * 10);
  }

  return (
    <div className="paginator" onClick={handleClick}>
      {currentPage - 3 >= 0 && (
        <div>
          <button
            key="btn_page_0"
            type="button"
            className="paginator-button fs-1"
            data-page-id={0}
          >
            1
          </button>
          <span>...</span>
        </div>
      )}
      {pages.map((p, i) => {
        return (
          i < currentPage + 3 &&
          i > currentPage - 3 && (
            <button
              key={`btn_page_${i}`}
              type="button"
              className={`paginator-button fs-1 ${
                currentPage === i ? "active" : ""
              }`}
              disabled={currentPage === i}
              data-page-id={i}
            >
              {i + 1}
            </button>
          )
        );
      })}
      {pages.length >= currentPage + 3 && (
        <div>
          <span>...</span>
          <button
            key={`btn_page_${pages.length}`}
            type="button"
            className="paginator-button fs-1"
            data-page-id={pages.length - 1}
          >
            {pages.length - 1}
          </button>
        </div>
      )}
      <span>{`Page ${currentPage + 1} of total ${pages.length - 1}`}</span>
    </div>
  );
}
