import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Cart() {
  //Number of items const
  const itemsQuantity = 1;
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="p-5">
        <div className="flex justify-center text-5xl">Cart</div>
        <div className="flex items-center justify-between mt-4">
          <button className="btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] hover:bg-white">
            Continue Shopping
          </button>
          <div className="flex underline text-lg hover:cursor-pointer">
            <p>Items in your cart : {itemsQuantity}</p>
          </div>
          <button className="btn">Checkout</button>
        </div>
        {/* Central Div */}
        <div className="flex mt-7">
          <div className="flex flex-col flex-1 bg-blue-200">
            {/* List of products div */}
            <div className="flex w-[100%] h-auto items-center bg-yellow-500">
              <div className="product flex self-start pl-5">
                <img
                  className="w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-1.1 ease-in duration-300"
                  src="https://www.c-and-a.com/productimages/b_rgb:EBEBEB,c_scale,h_860,q_auto:eco,e_sharpen:70/v1643022569/2170303-1-08.jpg"
                  alt="product_img"
                />
                <div>
                  <p>
                    <b>ID</b> : 12345
                  </p>
                  <p>
                    <b>Product</b> : Harry Potter Hoodie
                  </p>
                  <p>
                    <b>Color</b> : Light-Blue
                  </p>
                  <p>
                    <b>Size</b> : Medium
                  </p>
                </div>
              </div>
              <div className="bg-green-400">Product quantity and price</div>
            </div>
          </div>
          <div className="bg-red-400">Summary</div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Cart;
