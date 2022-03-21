import React from "react";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

function ProductPage() {
  return (
    <div>
      <Announce />
      <Navbar />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductPage;
