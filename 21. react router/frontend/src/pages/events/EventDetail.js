import { useParams } from "react-router-dom";

function EventDetail() {
  const params = useParams();
  return <h1>{params.id}</h1>;
}

export default EventDetail;
