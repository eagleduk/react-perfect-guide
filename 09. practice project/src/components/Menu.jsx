export default function Menu({ projects, onSelect, onAdd }) {
  return (
    <section>
      <div>
        <h1>your projects</h1>
        <button onClick={() => onAdd(true)}>+ AddProject</button>
      </div>
      <ul>
        {Object.entries(projects).map(([id, project]) => (
          <li key={id} onClick={() => onSelect(id)}>
            {project.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
