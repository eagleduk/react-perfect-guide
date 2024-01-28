import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import {useMutation, useQuery} from "@tanstack/react-query";

import Header from '../Header.jsx';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';

export default function EventDetails() {
  const navigate = useNavigate();
  const {id} = useParams();

  const {mutate} = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["events"], refetchType: "none"})
      navigate("/events");
    }
  })

  const {data, isPending, isError, error} = useQuery({
    queryKey: ["events", id],
    queryFn: ({signal}) => fetchEvent({signal, id})
  });

  const deleteButtonHandler = () => {
    mutate({id});
  }

  let content;
  if(isPending) content = <div style={{textAlign: "center"}} ><LoadingIndicator /></div>
  if(isError) content = <ErrorBlock title={"Get Data Error"} message={error.message || "Error"} />
  if(data) content = (<article id="event-details">

  <header>
    <h1>{data.title}</h1>
    <nav>
      <button onClick={deleteButtonHandler}>Delete</button>
      <Link to="edit">Edit</Link>
    </nav>
  </header>
  <div id="event-details-content">
    <img src={`http://localhost:3000/${data.image}`} alt="" />
    <div id="event-details-info">
      <div>
        <p id="event-details-location">{data.location}</p>
        <time dateTime={`Todo-DateT$Todo-Time`}>{data.date} @ {data.time}</time>
      </div>
      <p id="event-details-description">{data.description}</p>
    </div>
  </div>
</article>)

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {content}
    </>
  );
}
