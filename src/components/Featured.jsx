import { useEffect, useState } from "react";

import api from "../api/posts";
import { Products } from "./index";

const Featured = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await api.get("/category/motorcycle");
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
    fetchFeaturedProducts();
  }, []);

  return (
    <div className="relative">
      <div className="p-20">
        <h1 className="heading1 absolute pt-[7px] pb-[11px] px-[40px] text-center bg-black text-white top-[50px] left-[50%] translate-x-[-50%]  mix-blend-multiply text-[70px] font-[800]">
          Featured
        </h1>
      </div>
      <div className="mx-10 mb-10">
        <div className="page__background w-full h-[550px] border-none rounded-[50px] p-5">
          <div className="flex gap-4 overflow-x-scroll">
            <Products data={products} page="featured" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
