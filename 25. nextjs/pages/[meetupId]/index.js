import MeetupDetail from "../../components/meetups/MeetupDetail";

function Detail(props) {
  return (
    <MeetupDetail
      image={props.image}
      title={props.title}
      description={props.description}
      address={props.address}
    />
  );
}

export default Detail;

export async function getStaticPaths(context) {
  return {
    fallback: false,
    paths: [
      {
        params: { meetupId: "m1" },
      },
      {
        params: { meetupId: "m2" },
      },
    ],
  };
}

export async function getStaticProps(context) {
  return {
    props: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
      title: "title",
      description: "description",
      address: "address",
    },
  };
}
