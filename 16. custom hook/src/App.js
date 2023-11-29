import React, { useCallback, useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/useHttp";

function App() {
  const [tasks, setTasks] = useState([]);

  const responseFn = useCallback(
    (responseData) => {
      const loadedTasks = [];

      for (const taskKey in responseData) {
        loadedTasks.push({ id: taskKey, text: responseData[taskKey].text });
      }

      setTasks(loadedTasks);
    },
    [setTasks]
  );

  const { error, isLoading, fetchService } = useHttp();

  useEffect(() => {
    fetchService(
      "https://udemy-perfect-react-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
      undefined,
      responseFn
    );
  }, [responseFn]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchService}
      />
    </React.Fragment>
  );
}

export default App;
