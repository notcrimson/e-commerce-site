import { useEffect, useMemo, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { RiCloseLine, RiFilter2Fill } from "react-icons/ri";
import axios from "axios";

// import { cards } from "../../constants/cards";
import Products from "../../components/Product/Products";
import "./store.css";
import Filters from "../../components/Filters";
import api from "../../api/posts";
import { Dialog, Transition } from "@headlessui/react";

//TODO: TRANSFER THE USEEFFECT ON MOUNT TO APP.JSX SO IT CAN FETCH FROM THERE
//TODO: ADD PROP TO STORE DATA TO PASS DOWN THE FETCHED RESULTS FROM APP.JSX

const Store = () => {
  const [products, setProducts] = useState([]);

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [categories, setCategories] = useState([]);

  const [filterToggle, setFilterToggle] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get(`?limit=${limit}`);

        const categories = await api.get("/categories");
        setCategories(categories.data);
        setProducts(response.data.products);
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

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (selectedFilters.length === categories.length || selectedFilters.length === 0) {
          const response = (await api.get(`?limit=${limit}`)).data.products;
          setProducts(response);
        } else {
          axios
            .all(
              selectedFilters.map((category) =>
                api.get(`/category/${category}?limit=${limit / selectedFilters.length}`)
              )
            )
            .then((responses) => {
              let data = [];

              responses.forEach((resp) => {
                data.push(...resp.data.products);
              });
              setProducts(data);
            });
        }
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
  }, [limit, selectedFilters]);

  const handleSearch = (data) => {
    return data.filter((card) => card.title.toLowerCase().includes(searchText.toLowerCase()));
  };

  const searchedProducts = useMemo(() => handleSearch(products), [searchText, products]);

  const handleShowMore = () => {
    setLimit(() => limit + 6);
  };

  return (
    <div className="store__section  relative ">
      <div className=" page__background ">
        <h1 className="heading1 absolute py-[18px] px-[50px] text-center bg-black text-white top-[16px] left-[50%] translate-x-[-50%]  mix-blend-multiply text-[96px] font-[800]">
          Store
        </h1>{" "}
      </div>
      <div className="z-1 relative top-[6rem]">
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
        <Transition
          show={filterToggle}
          className="grid overflow-hidden bg-gradient"
          enter=" transition-all duration-500 ease-in-out"
          enterTo=" grid-rows-[1fr]"
          enterFrom=" grid-rows-[0fr]"
          leave="  transition-all duration-500 ease-in-out"
          leaveTo=" grid-rows-[0fr]"
          leaveFrom=" grid-rows-[1fr]"
        >
          <div className={`flex flex-col w-full text-left items-start pl-[100px] min-h-0 `}>
            <Filters
              data={products}
              categories={categories}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              setProducts={setProducts}
            />
          </div>
        </Transition>

        <div className=" bg-white px-[2rem] py-[2rem] store__section-content flex flex-col ">
          <div className="bg-clouds  bg-lime-700/20 bg-blend-overlay  rounded-xl p-[2rem]  bg-no-repeat bg-cover  w-full h-full">
            <div className="store__section-content-container gap-4">
              <Products data={searchedProducts} />
            </div>
          </div>
          <button
            onClick={handleShowMore}
            className="mt-[1rem] border border-solid border-black rounded-full"
          >
            Show More
          </button>
        </div>
        <div className="h-[6rem]"></div>
      </div>
    </div>
  );
};
export default Store;
