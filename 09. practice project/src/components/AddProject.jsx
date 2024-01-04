import { useState } from "react";

export default function AddProject({ onAdd, onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  function handleSaveEvent() {
    setTitle("");
    setDescription("");
    setDate("");
    onAdd(false);
    onAddProject({ title, description, date, task: [] });
  }

  return (
    <section>
      <p>
        <button onClick={() => onAdd(false)}>Cancel</button>
        <button onClick={handleSaveEvent}>Save</button>
      </p>
      <p>
        <label>title</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </p>
      <p>
        <label>description</label>
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </p>
      <p>
        <label>due date</label>
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </p>
    </section>
  );
}
