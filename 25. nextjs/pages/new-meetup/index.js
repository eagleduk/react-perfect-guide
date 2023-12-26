import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeet() {
  const addMeetupEventHandler = (meetupData) => {
    console.log(meetupData);
  };
  return <NewMeetupForm onAddMeetup={addMeetupEventHandler} />;
}

export default NewMeet;
