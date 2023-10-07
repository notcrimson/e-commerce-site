import { Link } from "react-router-dom";
import "./header.css";
import Carousel from "./Carousel";

const Header = () => {
  return (
    <div className="section__padding bg-gradient relative flex">
      <div className="w-full">
        <h1 className="text-7xl w-10">Welcome to the site</h1>
        <p className="mt-6">Something new on the horizon</p>
        <Link to="/Store">
          <button className="shop-btn mt-6 border px-7 py-4 bg-secondary-500 rounded-full border-none ">
            Shop now
          </button>
        </Link>
      </div>
      <Carousel />
    </div>
  );
};

export default Header;
