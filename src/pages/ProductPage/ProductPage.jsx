import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./productpage.css";

//TODO: layot and style ProductPage
//TODO: ADD PROP TO PRODUCTPAGE SO IT CAN RETURN THE FETCHED API RESULTS FROM APP.JSX

const ProductPage = () => {
  const location = useLocation();
  const product = location.state?.data;

  const [imgClicked, setImgClicked] = useState(product.thumbnail);
  // const { productID } = useParams();
  // const singleProduct = products?.find((product) => product.id === parseInt(productID));
  // console.log(singleProduct);

  return (
    <div className="page__background">
      <div className=" bg-white border-none rounded-xl flex justify-center flex-col pt-10 pb-4 px-[4rem] lg:mx-[10%] sm:mx-[4%] xs:mx-[2%]">
        <h1 className="text-2xl mb-[1rem] capitalize">{product.title}</h1>
        <div className="flex justify-between  sm:flex-row xs:flex-col">
          <img src={imgClicked} className="w-[400px] h-[400px] object-contain mb-4" />

          <div className="#prices# border border-black p-[1rem] mb-4">
            <h1 className="text-secondary-500 font-extrabold px-2 border-none rounded-xl text-2xl">
              {((product.price * (100 - product.discountPercentage)) / 100).toFixed(2)}
              <span className="text-base"> &#36;</span>
            </h1>
            <div className="flex items-center gap-2 text-lg px-[10px]">
              <h1 className="">
                <s>{product.price} &#36;</s>
              </h1>
              <h1 className="bg-secondary-300  px-2 border border-none rounded-xl">
                &#8722;{Math.round(product.discountPercentage)}&#37;
              </h1>
            </div>
          </div>
        </div>

        <div className="images flex gap-2 w-[400px] ">
          <div className=" grid grid-flow-row  md:grid-cols-5 xs:grid-cols-4 gap-2">
            <img
              src={product.thumbnail}
              onClick={(e) => setImgClicked(e.target.src)}
              className="img_border"
            />
            {product.images?.map((img) => {
              if (img.includes("thumbnail")) return;
              return (
                <img
                  key={img}
                  src={img}
                  onClick={(e) => setImgClicked(e.target.src)}
                  className="img_border"
                />
              );
            })}
          </div>
        </div>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductPage;
