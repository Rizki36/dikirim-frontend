import Header from "@/components/Header";
import privateRoute from "configs/routes/privateRoute";

const Home = ({ data }) => {
  return <div>{data}</div>;
};

export const getServerSideProps = privateRoute(async (ctx) => {
  return {
    props: {
      data: "test",
    },
  };
});
export default Home;
