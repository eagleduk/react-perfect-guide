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
  const { meetupId } = context.params;
  const response = await fetch("http://localhost:3000/api/meets/" + meetupId, {
    method: "GET",
  });
  const { data } = await response.json();
  if (data.length > 0) {
    return {
      props: data[0],
    };
  }
}
