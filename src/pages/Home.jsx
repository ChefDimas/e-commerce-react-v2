import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Slidebar from "../components/Slidebar";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slidebar />
      <Categories />
      <Products />
      <Newsletter />
      </Footer >
    </div>
  );
}

export default Home;
