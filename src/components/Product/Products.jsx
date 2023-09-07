import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

import { CartButtons, Price } from "../index";

const Products = React.memo(({ data }) => {
  return (
    <>
      {data?.map((product) => (
        <div key={product.id} className="w-full ">
          <Link to={`/product/${product.id}`} state={{ data: product }}>
            <div className=" group transition-all duration-300 bg-secondary-300/60 hover:bg-secondary-300 ease-in-out border border-none rounded-xl my-2 h-full w-full">
              <div
                className="  px-[1rem] py-4 
              flex justify-center flex-col w-full items-center"
              >
                <h1 className="group-hover:text-white flex items-center text-center h-[3rem] text-2xl pt-[2rem] pb-[3rem] capitalize">
                  {product.title}
                </h1>
                <div className=" bg-white py-[2rem] border-none rounded-xl">
                  <img src={product.thumbnail} className="w-[300px] h-[120px] object-contain " />
                </div>

                <div className="flex flex-col my-4 justify-center items-center">
                  <span className="text-2xl font-semibold">
                    <Price price={product.price} discountPercentage={product.discountPercentage} />
                  </span>

                  <div className="flex items-center gap-2  ">
                    <h1 className="">
                      <s>{product.price} &#36;</s>
                    </h1>
                    <h1 className="bg-secondary-300 text-base px-2 border border-none rounded-xl group-hover:bg-white/70">
                      &#8722;{Math.round(product.discountPercentage)}&#37;
                    </h1>
                  </div>
                </div>

                <p className="group-hover:text-white text-lg text-center text-black/70 font-normal">
                  Click to see fully
                </p>
                <p className="capitalize mb-2">Category: {product.category}</p>
                <CartButtons product={product} style="storePage" />
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
});

Products.displayName = "Products";
Products.propTypes = {
  data: PropTypes.array,
};

export default Products;
