import { Link } from "react-router-dom";
import { Menu, ShoppingCart } from "./components";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [active, setActive] = useState("");

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
        className=" xl:hidden max-xl:flex justify-start items-end flex-col text-start mx-4 absolute right-16"
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
      <ShoppingCart />
    </nav>
  );
};

export default Navbar;
