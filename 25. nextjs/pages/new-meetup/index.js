import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeet() {
  const addMeetupEventHandler = async (meetupData) => {
    const response = await fetch("http://localhost:3000/api/meets", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { message } = await response.json();
    console.log(message);
  };
  return <NewMeetupForm onAddMeetup={addMeetupEventHandler} />;
}

export default NewMeet;
