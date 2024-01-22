export default function Input({ label, id, isInvalid, ...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      <div className="control-error">
        {isInvalid && "Please input valid email."}
      </div>
    </div>
  );
}
