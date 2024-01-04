import { useState } from "react";
import noProjectImg from "./assets/no-projects.png";

function App() {
  const [projects, setProjects] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAdd, setIsAdd] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [task, setTask] = useState("");

  function handleSaveEvent() {
    setTitle("");
    setDescription("");
    setDate("");
    setIsAdd(false);
    setProjects((current) => ({
      ...current,
      [Date.now()]: {
        title,
        description,
        date,
        task: [],
      },
    }));
  }

  function handleDeleteProjectEvent(del) {
    setProjects((current) => {
      const temp = { ...current };
      delete temp[del];
      return temp;
    });
  }

  function handleAddTaskEvent() {
    setProjects((current) => {
      return {
        ...current,
        [selectedProject]: {
          ...current[selectedProject],
          task: [
            ...current[selectedProject].task,
            { id: Date.now(), text: task },
          ],
        },
      };
    });
  }

  function handleDeleteTaskEvent(del) {
    setProjects((current) => {
      return {
        ...current,
        [selectedProject]: {
          ...current[selectedProject],
          task: current[selectedProject].task.filter(({ id }) => id !== del),
        },
      };
    });
  }

  return (
    <main>
      <section>
        <p>
          <h1>your projects</h1>
          <button onClick={() => setIsAdd(true)}>+ AddProject</button>
        </p>
        <ul>
          {Object.entries(projects).map(([id, project]) => (
            <li key={id} onClick={() => setSelectedProject(id)}>
              {project.title}
            </li>
          ))}
        </ul>
      </section>
      {isAdd && (
        <sesction>
          <p>
            <button onClick={() => setIsAdd(false)}>Cancel</button>
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
        </sesction>
      )}
      {!isAdd && !projects[selectedProject] && (
        <section>
          <img src={null && noProjectImg} />
          <h1>No Project Selected</h1>
          <p>Selet a project or get started with a new one</p>
          <button onClick={() => setIsAdd(true)}>Create new project</button>
        </section>
      )}
      {!isAdd && projects[selectedProject] && (
        <section>
          <p>
            <div>
              {projects[selectedProject].title}{" "}
              <button onClick={() => handleDeleteProjectEvent(selectedProject)}>
                Delete {selectedProject}
              </button>
            </div>
            <div>{projects[selectedProject].date}</div>
            <div>{projects[selectedProject].description}</div>
          </p>
          <p>
            <h1>Tasks</h1>
            <div>
              <input
                type="text"
                value={task}
                onChange={(event) => setTask(event.target.value)}
              />
              <button onClick={handleAddTaskEvent}> Add Task</button>
            </div>
          </p>
          <p>
            {projects[selectedProject].task.length === 0 && (
              <span>This project does not have any tasks yet.</span>
            )}
            {projects[selectedProject].task.map((task) => (
              <li key={task.id}>
                {task.text}
                <button onClick={() => handleDeleteTaskEvent(task.id)}>
                  Clear {task.id}
                </button>
              </li>
            ))}
          </p>
        </section>
      )}
    </main>
  );
}

export default App;
