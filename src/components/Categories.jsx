import React from "react";

const Categories = () => {
  return (
    <div className="relative mb-10">
      <div className="page__background w-full  pb-20">
        <div className="p-20">
          <h1 className="section-heading pt-[8px] pb-[20px] ">Categories</h1>
        </div>
        <div className="category__section px-20 grid grid-cols-3 grid-flow-row-dense gap-2 ">
          <div name="Technology" className="group category relative ">
            <div className="group-hover:catergory__description-b "></div>
            <div className="absolute z-10 text-center inset-x-0 m-auto top-[50%] translate-y-[-50%] hidden group-hover:block text-xl font-extrabold">
              <h2 className="text-white ">Something</h2>
              <h2 className="text-white ">Something</h2>
            </div>
            <h1 className="group-hover:blur-md">Technology</h1>
          </div>

          <div name="Skincare" className="group category">
            <h1 className="group-hover:blur-sm">Skincare</h1>
          </div>
          <div name="Home" className=" group category">
            <h1 className="group-hover:blur-sm">Home</h1>
          </div>
          <div name="Clothing" className=" group category">
            <h1 className="group-hover:blur-sm">Clothing</h1>
          </div>
          <div name="Accessories" className="group category">
            <h1 className="group-hover:blur-sm">Accessories</h1>
          </div>
          <div name="Other" className="group category">
            <h1 className="group-hover:blur-sm">Other</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
