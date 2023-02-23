import { ReactNode } from "react";
import "./modal.scss";
interface Props {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode | undefined;
}

export default function Modal({ isOpen, onClose, children }: Props) {
  // Only render the modal if it's open
  if (!isOpen) {
    return null;
  }

  // Add a class to the body to prevent scrolling
  if (typeof document !== "undefined") {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    }
  }

  function handleClose() {
    document.body.classList.remove("no-scroll");
    onClose();
  }

  return (
    <div className={`modal ${isOpen ? "visible" : ""}`}>
      <div className="modal-backdrop" onClick={handleClose}></div>
      <div className="modal-content">
        <button className="modal-close" onClick={handleClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
