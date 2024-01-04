import { useState } from "react";
import noProjectImg from "../assets/no-projects.png";

export default function ProjectTask({
  id,
  project,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
}) {
  const [task, setTask] = useState("");
  return (
    <>
      {!project && (
        <section>
          <img src={null && noProjectImg} />
          <h1>No Project Selected</h1>
          <p>Selet a project or get started with a new one</p>
          <button onClick={() => setIsAdd(true)}>Create new project</button>
        </section>
      )}
      {project && (
        <section>
          <p>
            <div>
              {project.title}{" "}
              <button onClick={() => onDeleteProject(id)}>Delete {id}</button>
            </div>
            <div>{project.date}</div>
            <div>{project.description}</div>
          </p>
          <p>
            <h1>Tasks</h1>
            <div>
              <input
                type="text"
                value={task}
                onChange={(event) => setTask(event.target.value)}
              />
              <button onClick={() => onAddTask(task)}> Add Task</button>
            </div>
          </p>
          <p>
            {project.task.length === 0 && (
              <span>This project does not have any tasks yet.</span>
            )}
            {project.task.map((task) => (
              <li key={task.id}>
                {task.text}
                <button onClick={() => onDeleteTask(task.id)}>
                  Clear {task.id}
                </button>
              </li>
            ))}
          </p>
        </section>
      )}
    </>
  );
}
