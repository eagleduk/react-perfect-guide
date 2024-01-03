import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function (
  { resultTime, onReset, targetTime },
  ref
) {
  const dialog = useRef();

  const result = resultTime <= 0;
  const sec = Math.floor((1 - resultTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog className="result-modal" ref={dialog} onClose={onReset}>
      {result && <h2>You lose</h2>}
      {!result && <h2>Your Score: {sec}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{(resultTime / 1000).toFixed(2)} seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
