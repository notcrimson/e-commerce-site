import { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { RiCloseLine, RiFilter2Fill } from "react-icons/ri";

import { cards } from "../../constants/cards";
import Products from "../../components/Product/Products";
import "./store.css";

//TODO: create the handleSearch component
//TODO: filters

const Filters = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(cards);

  let types = [...new Set(cards.map((card) => card.type))];

  const handleFilterChecked = (selectedType) => {
    if (selectedFilters.includes(selectedType)) {
      let filters = selectedFilters.filter((el) => el !== selectedType);
      setSelectedFilters(filters);
    } else {
    }
  };

  return (
    <div className="flex flex-col">
      {types?.map((type) => (
        <div key={type} className=" flex flex-row gap-2">
          <input onChange={handleFilterChecked(type)} type="checkbox" />
          <h1>{type}</h1>
        </div>
      ))}
    </div>
  );
};

const Store = () => {
  const [filterToggle, setFilterToggle] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (data) => {
    return data.filter((card) => card.name.toLowerCase().includes(searchText.toLowerCase()));
  };

  return (
    <div className="store__section py-[6rem]  bg-clouds bg-lime-700/20 bg-blend-overlay h-full relative bg-no-repeat bg-cover">
      <h1 className="heading1 absolute py-[18px] px-[50px] text-center bg-black text-white top-[16px] left-[50%] translate-x-[-50%]  mix-blend-multiply text-[96px] font-[800]">
        Store
      </h1>
      <div className="px-[4rem] bg-white pt-16 pb-4">
        <div className="store__content-filter  flex justify-between text-center items-center">
          <div className="toggle_filter-btns">
            <div onClick={() => setFilterToggle(!filterToggle)} className="icon_trans-op">
              {filterToggle ? <RiCloseLine size={30} /> : <RiFilter2Fill size={30} />}
            </div>
          </div>
          <div className="flex flex-row gap-2 text-left items-center">
            <input
              onChange={(e) => setSearchText(e.target.value)}
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
        }   flex-col py-6 left-0 w-full bg-gradient text-left items-start pl-[100px] gap-4 `}
      >
        <Filters />
      </div>

      <div className="px-[2rem] py-[2rem] store__section-content flex bg-white">
        <div className="bg-clouds  bg-lime-700/20 bg-blend-overlay  rounded-xl p-[2rem] w-full bg-no-repeat bg-cover h-full ">
          <div className="store__section-content-container gap-4">
            <Products data={handleSearch(cards)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;