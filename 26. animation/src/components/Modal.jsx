import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        open
        className="modal"
        initial={{ translateY: "100px", opacity: 0 }}
        animate={{ translateY: "0px", opacity: 1 }}
        exit={{ translateY: "100px", opacity: 0 }}
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
