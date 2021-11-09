import UserLayout from "@/components/layouts/UserLayout";
import { AuthInterface } from "index";

const Home = () => {
  return <UserLayout>Home</UserLayout>;
};

Home.auth = {
  role: "reseller",
} as AuthInterface;

export default Home;
