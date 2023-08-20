import axios from "axios";

export default axios.create({
  baseURL: "https://dummyjson.com/products",
  //   baseURL: "https://fakestoreapi.com/products",
  params: {
    _limit: 100,
  },
});
