import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, updateEvent, queryClient } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      // 쿼리 새로고침 방지
      await queryClient.cancelQueries({ queryKey: ["events", id] });
      // 기존 데이터 추출
      const preData = queryClient.getQueryData(["events", id]);
      // 새로운 데이터 삽입
      queryClient.setQueryData(["events", id], data.event);
      // 기존 데이터 반환
      return { preData };
    },
    onError: (error, variables, context) => {
      // 기존 데이터로 삽입
      queryClient.setQueryData(["events", id], context.preData);
    },
    onSettled: () => {
      // 쿼리 새로 고침
      queryClient.invalidateQueries(["events", id]);
    },
  });

  function handleSubmit(formData) {
    mutate({ id, event: formData });
    navigate("../");
  }

  function handleClose() {
    navigate("../");
  }

  let content;
  if (isPending)
    content = (
      <div style={{ textAlign: "center" }}>
        <LoadingIndicator />
      </div>
    );
  if (isError)
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={
            error.info?.message ||
            "Failed to load event. Please check your inputs and try again later."
          }
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  if (data)
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );

  return <Modal onClose={handleClose}>{content}</Modal>;
}
