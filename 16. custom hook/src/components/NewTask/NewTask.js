import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/useHttp";

const NewTask = (props) => {
  const responseFn = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };
  const { error, isLoading, fetchService } = useHttp();

  const enterTaskHandler = async (taskText) => {
    fetchService(
      "https://udemy-perfect-react-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
      {
        method: "POST",
        body: JSON.stringify({ text: taskText }),
        headers: {
          "Content-Type": "application/json",
        },
      },
      responseFn.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
