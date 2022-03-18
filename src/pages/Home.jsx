import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Slidebar from "../components/Slidebar";
import Categories from "../components/Categories";

function Home() {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slidebar />
      <Categories />
    </div>
  );
}

export default Home;
