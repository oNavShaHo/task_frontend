import React, { useContext, useState } from "react";
import { ProductDataContext } from "../context/context";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from "react-router-dom";


function Products() {
  const { selectedProductData, placeOrderForItem ,addToCart } = useContext(ProductDataContext);
  const [modalVisible, setModalVisible] = useState(false);

  const handleBuyNow = async () => {
    if (selectedProductData) {
      await placeOrderForItem(selectedProductData.id);
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      {modalVisible?(<div className="h-screen w-screen">

      <div className="absolute h-[40vh] top-[30%] left-[30%] w-[40vw] flex z-10 items-center justify-center bg-gray-100">
        <p className="flex text-center">Order placed</p>

      <Link to='/Home'><button >Close</button></Link>
      </div>
      <div className="absolute ">{selectedProductData ? (
        <div className="flex disabled w-full h-screen opacity-50 relative">
          <div className="w-[50vw] flex justify-center items-center">
            <img
              src={selectedProductData.image}
              alt="img"
              className="h-[70%]"
            />
          </div>
          <div className="w-[50vw] flex flex-col justify-between">
            <div className="flex p-6 ">
              <div className="flex flex-col gap-7 border-gray-300 p-10 border-l-2 mt-10 ">
                <h1 className="text-[2.6rem] font-bold">
                  {selectedProductData.title}
                </h1>
                <p className="font-[400]">{selectedProductData.description}</p>
                <p className="text-[2.4rem] font-semibold">
                  $ {selectedProductData.amount}
                </p>
              </div>
              <div className="self-center relative mb-[13rem] border-8 rounded-[100%] border-gray-300 bg-gray-300">
                <FavoriteBorderOutlinedIcon />
              </div>
            </div>
            <div className="flex  justify-around border-gray-300 p-10 border-l-2 ">
              <button
                className="border-x-2 border-y-2 border-black px-8 py-2 text-[2rem]"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
              <button className="border-x-2 border-y-2 bg-black text-white border-black px-8 py-2 text-[2rem]">
                Add to basket
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>1loading</div>
      )}
</div>

      </div>):(<div>{selectedProductData ? (
        <div className="flex w-full h-screen relative">
          <div className="w-[50vw] flex justify-center items-center">
            <img
              src={selectedProductData.image}
              alt="img"
              className="h-[70%]"
            />
          </div>
          <div className="w-[50vw] flex flex-col justify-between">
            <div className="flex p-6 ">
              <div className="flex flex-col gap-7 border-gray-300 p-10 border-l-2 mt-10 ">
                <h1 className="text-[2.6rem] font-bold">
                  {selectedProductData.title}
                </h1>
                <p className="font-[400]">{selectedProductData.description}</p>
                <p className="text-[2.4rem] font-semibold">
                  $ {selectedProductData.amount}
                </p>
              </div>
              <div className="self-center relative mb-[13rem] border-8 rounded-[100%] border-gray-300 bg-gray-300">
                <FavoriteBorderOutlinedIcon />
              </div>
            </div>
            <div className="flex  justify-around border-gray-300 p-10 border-l-2 ">
              <button
                className="border-x-2 border-y-2 border-black px-8 py-2 text-[2rem]"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
              <button  onClick={addToCart} className="border-x-2 border-y-2 bg-black text-white border-black px-8 py-2 text-[2rem]">
                Add to basket
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>1loading</div>
      )}
</div>)}
      
      {/* Modal */}
      
    </div>
  );
}

export default Products;
