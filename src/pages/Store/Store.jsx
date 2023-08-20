import { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { RiCloseLine, RiFilter2Fill } from "react-icons/ri";

import { cards } from "../../constants/cards";
import Products from "../../components/Product/Products";
import "./store.css";
import Filters from "../../components/Filters";
import api from "../../api/posts";

//TODO: create the handleSearch component
//TODO: filters
//TODO: turn off all filters

const Store = () => {
  const [products, setProducts] = useState([]);

  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const [filterToggle, setFilterToggle] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("?limit=100");
        setProducts(response.data.products);
        setFilteredItems(response.data.products);
        console.log(products);
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      }
    };

    fetchPosts();
  }, []);

  const handleSearch = (data) => {
    return data.filter((card) => card.title.toLowerCase().includes(searchText.toLowerCase()));
  };

  return (
    <div className="store__section py-[6rem]  bg-clouds bg-lime-700/20 bg-blend-overlay h-full relative bg-no-repeat bg-contain">
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
        <Filters
          data={products}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          filteredItems={filteredItems}
          setFilteredItems={setFilteredItems}
        />
      </div>

      <div className="px-[2rem] py-[2rem] store__section-content flex bg-white">
        <div className="bg-clouds  bg-lime-700/20 bg-blend-overlay  rounded-xl p-[2rem]  bg-no-repeat bg-cover  w-full h-full">
          <div className="store__section-content-container gap-4">
            <Products data={handleSearch(filteredItems)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
