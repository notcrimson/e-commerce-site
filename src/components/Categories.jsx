import React from "react";

const Categories = () => {
  return (
    <div className="relative mb-10">
      <div className="page__background w-full  pb-20">
        <div className="p-20">
          <h1 className="section-heading pt-[8px] pb-[20px] ">Categories</h1>
        </div>
        <div className="category__section px-20 grid grid-flow-col grid-cols-3 gap-4">
          <div name="Technology" className="category ">
            <h1>Technology</h1>
          </div>
          <div name="Skincare" className="category">
            <h1>Skincare</h1>
          </div>
          <div name="Home" className="category">
            <h1>Home</h1>
          </div>
          <div name="Clothing" className="category">
            <h1>Clothing</h1>
          </div>
          <div name="Accessories" className="category">
            <h1>Accessories</h1>
          </div>
          <div name="Other" className="category">
            <h1>Other</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
