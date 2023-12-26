import MeetupList from "../components/meetups/MeetupList";

const list = [
  {
    id: "m1",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    title: "meets1",
    address: "address1",
  },
  {
    id: "m2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    title: "meets2",
    address: "address2",
  },
];

function Home() {
  return <MeetupList meetups={list} />;
}

export default Home;
