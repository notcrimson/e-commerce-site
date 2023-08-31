import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import "./productpage.css";
import api from "../../api/posts";
import { RatingStars, About } from "./components";
import { CartButtons } from "../../components";
import { Price } from "../../components";

//TODO: layot and style ProductPage
//TODO: ADD PROP TO PRODUCTPAGE SO IT CAN RETURN THE FETCHED API RESULTS FROM APP.JSX

//TODO: FETCH THE PRODUCT BY ITS ID FROM URL AND COMPARE IT TO THE ID FROM API (fetch from this page) result is one product

const ProductPage = () => {
  // const location = useLocation();
  // const product = location.state?.data;

  const { productID } = useParams();
  const [product, setProduct] = useState([]);
  const [imgClicked, setImgClicked] = useState();

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await api.get(`/${parseInt(productID)}`);
        setProduct(response.data);
        setImgClicked(response.data.thumbnail);
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
    fetchProductById();
    window.scrollTo(0, 0);
  }, []);

  // const singleProduct = products?.find((product) => product.id === parseInt(productID));
  // console.log(singleProduct);

  return (
    <div className="relative">
      <div className="page__background" />
      <div className="top-[6rem]  relative bg-white border-none rounded-xl mb-10 flex justify-center flex-col pt-10 pb-4 px-[4rem] marginx_query">
        <h1 className="text-2xl mb-[1rem] capitalize">{product.title}</h1>
        <div className="flex justify-between sm:flex-row xs:flex-col">
          <div className="#images# mb-6">
            <img src={imgClicked} className="w-[400px] h-[400px] object-contain mb-4" />
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
          </div>

          <div className="#prices# border h-full border-secondary-300 rounded-xl p-[1rem] mb-4 flex justify-between md:flex-row-reverse sm:flex-col gap-4">
            <div>
              <h1 className="text-secondary-500 font-extrabold px-2 border-none rounded-xl text-2xl">
                <Price price={product.price} discountPercentage={product.discountPercentage} />
              </h1>
              <div className="flex items-center gap-2 text-lg px-[10px]">
                <h1 className="">
                  <s>{product.price} &#36;</s>
                </h1>
                <h1 className="bg-secondary-300  px-2 border border-none rounded-xl">
                  &#8722;{Math.round(product.discountPercentage)}&#37;
                </h1>
              </div>
              <RatingStars rating={product.rating} />
              <CartButtons product={product} style="productPage" />
            </div>
            <About about={product} />
          </div>
        </div>
        <h1 className="text-xl font-bold">Description</h1>
        <p>{product.description}</p>
      </div>
      <div className="bg-white h-[250px] z-1 relative top-[7rem] marginx_query rounded-xl"></div>
      <div className="h-[6rem] top-[6rem] relative"></div>
    </div>
  );
};

export default ProductPage;
