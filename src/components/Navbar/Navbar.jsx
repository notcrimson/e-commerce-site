import { Link } from "react-router-dom";
import Menu from "./Menu";
import "./Navbar.css";
import shoppingCart from "../../assets/shoppingCart.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="flex flex-row justify-between items-center bg-secondary w-full py-8">
      <Link to="/" className="hover:text-white ">
        Home
      </Link>
      <div className="menu-style max-xl:hidden">
        <Menu />
      </div>
      <div className=" xl:hidden max-xl:flex justify-end items-center flex-col text-end  p-2 right-20 absolute">
        {toggleMenu ? (
          <RiCloseLine
            className="transition duration-300 hover:text-white"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className="transition duration-300 hover:text-white"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div
            onClick={() => setToggleMenu(false)}
            className="  flex flex-col justify-start items-start text-start absolute top-[67px] w-40  bg-[#ffc7c9]"
          >
            <Menu />
          </div>
        )}
      </div>
      <div className="shopping-cart">
        <img
          src={shoppingCart}
          alt="shoppingCart"
          className="w-7 mx-6 transition hover: cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
