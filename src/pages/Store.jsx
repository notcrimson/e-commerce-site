import { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { RiCloseLine, RiFilter2Fill } from "react-icons/ri";
import { cards } from "../constants/cards";
import Product from "../components/Product/Product";

const Store = () => {
  const [filterToggle, setfilterToggle] = useState(false);

  return (
    <div className="store__section py-[6rem]">
      <div className="px-[4rem]">
        <div className="store__heading w-full flex justify-center ">
          <h1 className="heading1">Store</h1>
        </div>
        <div className="store__content-filter  flex justify-between text-center items-center">
          <div className="toggle_filter-btns">
            <div onClick={() => setfilterToggle(!filterToggle)} className="icon_trans-op">
              {filterToggle ? <RiCloseLine size={30} /> : <RiFilter2Fill size={30} />}
            </div>
          </div>
          <div className="flex flex-row gap-2 text-left items-center">
            <input
              placeholder="Search"
              className="border-[1px] border-solid border-neutral-950 rounded-full text-left py-1 px-4"
            ></input>
            <GrSearch className="mb-1 icon_trans-op" size={23} />
          </div>
        </div>
      </div>
      <div
        className={`${
          filterToggle ? `flex` : `hidden`
        }   flex-col py-6 left-0 w-full bg-gradient text-left items-start pl-[100px] gap-4 mt-4`}
      >
        <h1>Unhidden</h1>
        <h1>Unhidden</h1>
        <h1>Unhidden</h1>
      </div>

      <div className="px-[2rem] py-[2rem] store__section-content flex">
        <div className="store__section-content-container  border border-solid border-black rounded-xl p-[2rem] w-full  grid grid-cols-4 grid-rows-2 gap-4 ">
          {cards?.map((card) => (
            <Product key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
