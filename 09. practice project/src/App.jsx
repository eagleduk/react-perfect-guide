import { useState } from "react";
import Menu from "./components/Menu";
import AddProject from "./components/AddProject";
import ProjectTask from "./components/ProjectTask";

function App() {
  const [projects, setProjects] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAdd, setIsAdd] = useState(true);

  function onAddProject(project) {
    setProjects((current) => ({
      ...current,
      [Date.now()]: project,
    }));
  }

  function handleDeleteProjectEvent(del) {
    setProjects((current) => {
      const temp = { ...current };
      delete temp[del];
      return temp;
    });
  }

  function handleAddTaskEvent(text) {
    setProjects((current) => {
      return {
        ...current,
        [selectedProject]: {
          ...current[selectedProject],
          task: [
            ...current[selectedProject].task,
            { id: Date.now(), text: text },
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
      <Menu
        projects={projects}
        onSelect={setSelectedProject}
        onAdd={setIsAdd}
      />

      {isAdd && <AddProject onAdd={setIsAdd} onAddProject={onAddProject} />}

      {!isAdd && (
        <ProjectTask
          project={projects[selectedProject]}
          id={selectedProject}
          onDeleteProject={handleDeleteProjectEvent}
          onAddTask={handleAddTaskEvent}
          onDeleteTask={handleDeleteTaskEvent}
        />
      )}
    </main>
  );
}

export default App;
