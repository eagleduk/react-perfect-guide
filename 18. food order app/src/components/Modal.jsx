import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ isOpen, children }) {
  const ref = useRef();

  useEffect(() => {
    if (isOpen) ref.current.showModal();
    else ref.current.close();
  }, [isOpen]);

  return createPortal(
    <dialog className="modal" ref={ref}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
