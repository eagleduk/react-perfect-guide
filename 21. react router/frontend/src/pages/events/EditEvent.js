import { useParams } from "react-router-dom";

function EditEvent() {
  const params = useParams();

  return <h1>{params.id} Edit</h1>;
}

export default EditEvent;
