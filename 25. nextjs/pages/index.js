import MeetupList from "../components/meetups/MeetupList";

function Home(props) {
  return <MeetupList meetups={props.meetups} />;
}

export default Home;

export async function getStaticProps(context) {
  const response = await fetch("http://localhost:3000/api/meets", {
    method: "GET",
  });
  const { data: list } = await response.json();
  return {
    props: {
      meetups: list,
    },
    revalidate: 10,
  };
}

// export async function getServerSideProps(context) {
//   const response = await fetch("/api/meets", { method: "GET" });
//   const data = await response.json();
//   return {
//     props: {
//       meetups: list,
//     },
//   };
// }
