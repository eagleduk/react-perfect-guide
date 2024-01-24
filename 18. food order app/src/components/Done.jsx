export default function Done({ onModalType }) {
  return (
    <div className="control">
      <h2>Success!</h2>
      <span>Your order was submitted successfully.</span>
      <p>
        We will get back to you with more details via email whithin the next few
        minutes.
      </p>

      <div className="modal-actions">
        <button
          className="button"
          type="button"
          onClick={() => onModalType(null)}
        >
          Okay
        </button>
      </div>
    </div>
  );
}
