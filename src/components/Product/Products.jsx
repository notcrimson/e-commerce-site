import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

import { CartButtons } from "../index";

const Products = React.memo(({ data }) => {
  return (
    <>
      {data?.map((card) => (
        <div key={card.id} className="w-full ">
          <Link to={`/product/${card.id}`} state={{ data: card }}>
            <div className=" group transition-all duration-300 bg-secondary-300/60 hover:bg-secondary-300 ease-in-out border border-none rounded-xl my-2 h-full w-full">
              <div
                className="  px-[2rem] py-4 
              flex justify-center flex-col w-full items-center"
              >
                <h1 className="group-hover:text-white flex items-center text-center h-[3rem] text-2xl pt-[2rem] pb-[3rem] capitalize">
                  {card.title}
                </h1>
                <div className=" bg-white py-[2rem] border-none rounded-xl">
                  <img src={card.thumbnail} className="w-[300px] h-[200px] object-contain " />
                </div>

                {/* TODO: FIX THE SCREEN SCALING ON 500PX */}

                <p className="group-hover:text-white  text-lg h-[8rem] w-full my-[2rem] capitalize">
                  {card.description}
                </p>

                <p className="group-hover:text-white text-lg text-center text-black/70 font-normal">
                  Click to see fully
                </p>
                <p className="capitalize mb-2">Category: {card.category}</p>
                <CartButtons product={card} style="storePage" />
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
