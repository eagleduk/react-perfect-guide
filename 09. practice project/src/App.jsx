import { useState } from "react";
import Menu from "./components/Menu";
import AddProject from "./components/AddProject";
import ProjectTask from "./components/ProjectTask";

function App() {
  const [projects, setProjects] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAdd, setIsAdd] = useState(false);

  function handleAddProjectPage(isAdd) {
    setIsAdd(isAdd);
    setSelectedProject(null);
  }

  function handleAddProjectEvent(project) {
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
    <main className="flex w-full">
      <div className="flex-initial w-3/5 bg-stone-900 p-8">
        <Menu
          projects={projects}
          onSelect={setSelectedProject}
          onAdd={handleAddProjectPage}
          selectedId={selectedProject}
        />
      </div>

      <div className="flex-initial w-full text-center">
        {isAdd && (
          <AddProject
            onAdd={handleAddProjectPage}
            onAddProject={handleAddProjectEvent}
          />
        )}

        {!isAdd && (
          <ProjectTask
            project={projects[selectedProject]}
            id={selectedProject}
            onAdd={handleAddProjectPage}
            onDeleteProject={handleDeleteProjectEvent}
            onAddTask={handleAddTaskEvent}
            onDeleteTask={handleDeleteTaskEvent}
          />
        )}
      </div>
    </main>
  );
}

export default App;
