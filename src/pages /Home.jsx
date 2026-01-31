import React from "react";
import Landing from "../components/Landing";
import Discounted from "../components/ui/Discounted";
import Explore from "../components/ui/Explore";
import Highlights from "../components/Highlights";
import Featured from "../components/Featured";

const Home = () => {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
};

export default Home;
