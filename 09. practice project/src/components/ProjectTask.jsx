import { useState } from "react";
import noProjectImg from "../assets/no-projects.png";

export default function ProjectTask({
  id,
  project,
  onAdd,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
}) {
  const [task, setTask] = useState("");
  return (
    <>
      {!project && (
        <section>
          <img src={noProjectImg} className="w-16 h-1w-16 mx-auto" />
          <h1 className="font-bold text-stone-600 text-xl">
            No Project Selected
          </h1>
          <span className="text-stone-400 font-semibold">
            Selet a project or get started with a new one
          </span>
          <button
            onClick={() => onAdd(true)}
            className="bg-stone-800 rounded text-stone-400 font-semibold px-4 py-2 hover:bg-stone-700"
          >
            Create new project
          </button>
        </section>
      )}
      {project && (
        <section className="text-left px-8 pr-20">
          <p>
            <div className="flex justify-between">
              <h1>{project.title}</h1>
              <button onClick={() => onDeleteProject(id)}>Delete</button>
            </div>
            <div>{project.date}</div>
            <div>
              <pre>{project.description}</pre>
            </div>
          </p>
          <div className="w-full h-0.5 border-gray-300 border-1 bg-gray-300"></div>
          <p>
            <h1>Tasks</h1>
            <div>
              <input
                type="text"
                value={task}
                onChange={(event) => setTask(event.target.value)}
                className="p-1 bg-gray-300 rounded-md focus:outline-blue-800"
              />
              <button
                onClick={() => onAddTask(task)}
                className="ml-4 font-semibold text-stone-600"
              >
                Add Task
              </button>
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
