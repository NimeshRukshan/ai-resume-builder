import { UserButton } from "@clerk/clerk-react";
import Header from "../components/custom/Header";

function Home() {
  return (
    <>
      <Header />
      <h1>Home</h1>

      <UserButton />
    </>
  );
}

export default Home;
