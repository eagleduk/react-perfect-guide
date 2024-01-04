export default function Menu({ projects, onSelect, onAdd, selectedId }) {
  return (
    <section>
      <div>
        <h1 className="uppercase text-stone-200 font-semibold text-xl">
          your projects
        </h1>
        <button
          onClick={() => onAdd(true)}
          className="bg-stone-500 rounded text-stone-300 px-4 py-2 hover:bg-stone-600"
        >
          + Add Project
        </button>
      </div>
      <ul className="mt-6">
        {Object.entries(projects).map(([id, project]) => (
          <li
            key={id}
            onClick={() => onSelect(id)}
            className={`hover:bg-stone-500 cursor-pointer px-1 py-1 my-2 ${
              id === selectedId
                ? "bg-stone-600 text-stone-300"
                : "text-stone-400"
            }`}
          >
            <span className="">{project.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
