import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Footer from "../components/Footer";

function CategoryPage() {
  return (
    <div>
      <Announce />
      <Navbar />
      {/* Container */}
      <div className="flex flex-col p-5">
        <h1 className="text-[30px]">Men's clothes</h1>
        <div className="flex items-center justify-between mt-3">
          <div className="flex">
            <p>Filter by</p>
            {/* Select by Size */}
            <select className="ml-3 border-2 border-silver" name="" id="">
              <option elected disabled>
                Size
              </option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            {/* Select by color */}
            <select className="ml-3 border-2 border-silver" name="" id="">
              <option selected disabled>
                Color
              </option>
              <option value="yellow">Yellow</option>
              <option value="black">Black</option>
              <option value="white">Gray</option>
            </select>
          </div>
          <div className="flex">
            <p>Sort by</p>
            {/* Sort by price and others */}
            <select className="ml-3 border-2 border-silver" name="" id="">
              <option>Newest (First)</option>
              <option>Oldest (First)</option>
              <option>Price (Asc)</option>
              <option>Price (Des)</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default CategoryPage;
