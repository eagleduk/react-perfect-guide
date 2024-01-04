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
    <section className="px-8 pr-20">
      <div className="text-right">
        <button
          onClick={() => onAdd(false)}
          className="text-stone-700 font-semibold mr-4 hover:text-stone-500"
        >
          Cancel
        </button>
        <button
          onClick={handleSaveEvent}
          className="rounded bg-stone-800 px-4 py-2 text-stone-200 hover:bg-stone-900"
        >
          Save
        </button>
      </div>
      <div className="text-left">
        <h2 className="uppercase text-stone-600 font-semibold mt-3">title</h2>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="w-full bg-stone-300 border-b-2 p-1 border-stone-300 focus:outline-none focus:border-stone-700"
        />
      </div>
      <div className="text-left">
        <h2 className="uppercase text-stone-600 font-semibold mt-3">
          description
        </h2>
        <textarea
          type="text"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
          className="w-full bg-stone-300 border-b-2 p-1 border-stone-300 focus:outline-none focus:border-stone-700"
        />
      </div>
      <div className="text-left">
        <h2 className="uppercase text-stone-600 font-semibold mt-3">
          due date
        </h2>
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          className="w-full bg-stone-300 border-b-2 p-1 border-stone-300 focus:outline-none focus:border-stone-700"
        />
      </div>
    </section>
  );
}
