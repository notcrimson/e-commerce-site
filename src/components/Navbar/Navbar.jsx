import { Link } from "react-router-dom";
import Menu from "./Menu";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../../redux/cartSlice";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [active, setActive] = useState("");
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  return (
    <nav className="flex flex-row justify-between items-center bg-secondary-500 w-full py-8 sticky top-0 z-20 px-6">
      <Link
        onClick={
          (() => setToggleMenu(false),
          () => {
            setActive("");
            window.scrollTo(0, 0);
          })
        }
        to="/"
        className="hover:text-white"
      >
        Home
      </Link>
      <div className="menu-style max-xl:hidden">
        <Menu />
      </div>
      <div
        onClick={() => setToggleMenu(!toggleMenu)}
        className=" xl:hidden max-xl:flex justify-start items-end flex-col text-start mx-4 absolute right-40"
      >
        {toggleMenu ? (
          <RiCloseLine className="icon_trans-white" size={27} />
        ) : (
          <RiMenu3Line className="icon_trans-white" size={27} />
        )}
        {toggleMenu && (
          <div className="absolute top-[59px] ">
            <Menu onClick={() => setToggleMenu(false)} />
          </div>
        )}
      </div>
      <div className="shopping-cart flex  justify-center items-center relative gap-4 ">
        <div className="relative cursor-pointer transition-all duration-300 group ease-out">
          <FaShoppingCart className=" text-black group-hover:text-white z-0" size={27} />
          <p
            className=" text-xs text-center absolute z-1  bottom-[18px] left-[14px] bg-red-700
          w-4 border border-none rounded-full text-white  group-hover:bg-black"
          >
            {products.length}
          </p>
        </div>
        <button
          className="border border-primary px-2 rounded-2xl"
          onClick={() => dispatch(resetCart())}
        >
          clear cart
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
