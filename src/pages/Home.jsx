import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Slidebar from "../components/Slidebar";

function Home() {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slidebar />
    </div>
  );
}

export default Home;
