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
      <div className="flex justify-center">
        <div className="flex flex-1 items-center justify-center">
          <img
            src="https://www.c-and-a.com/productimages/b_rgb:EBEBEB,c_scale,h_860,q_auto:eco,e_sharpen:70/v1643022569/2170303-1-08.jpg"
            alt="product-img"
            className="h-[80%] w-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
          />
        </div>
        <div className="flex flex-[1.3] items-start justify-items-start flex-col mt-10">
          <h1 className="title text-[40px]">Harry Potter Hoodie 100% Cotton</h1>
          <p className="pr-[4rem] text-justify mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quod
            earum atque aliquam sit fuga dignissimos ipsa inventore quas odio
            eum, sequi amet adipisci. Possimus nobis iusto suscipit quibusdam
            esse!
          </p>
          <p className="mt-7 text-3xl">
            Price: <b>$70</b>
          </p>
          {/* Color Choose */}
          <div className="flex text-2xl mt-7">
            <div className="bg-yellow-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5"></div>
            <div className="bg-gray-300 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5"></div>
            <div className="bg-black w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5"></div>
          </div>
          <div className="mt-7 text-2xl">
            Size
            <select className="ml-5 border-2">
              <option selected disabled>
                Select
              </option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductPage;
