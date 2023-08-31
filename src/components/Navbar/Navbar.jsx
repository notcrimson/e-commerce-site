import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

import "./Navbar.css";
import { Menu, ShoppingCart } from "./components";
import { Dialog, Transition } from "@headlessui/react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [active, setActive] = useState("");

  const onOpen = () => setToggleMenu(true);
  const onClose = () => setToggleMenu(false);

  return (
    <>
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
          className=" xl:hidden max-xl:flex justify-start items-end flex-col absolute text-start mx-4 right-16 z-10"
        >
          {toggleMenu ? (
            <RiCloseLine className="icon_trans-white" size={27} />
          ) : (
            <RiMenu3Line className="icon_trans-white" size={27} />
          )}
          <Transition show={toggleMenu}>
            <Dialog as="div" className="absolute top-[91px]" onClose={onClose}>
              <div className="fixed inset-0 bg-black bg-opacity-25 z-10" />
              <div className="fixed inset-x-0 z-10 flex">
                <Transition.Child
                  enter="transition ease-in-out duration-500 transform"
                  enterFrom="-translate-y-full"
                  enterTo="translate-y-0"
                  leave="transition ease-in-out duration-500 transform"
                  leaveFrom="translate-y-0"
                  leaveTo="-translate-y-full"
                >
                  <Dialog.Panel>
                    <Menu onClick={() => setToggleMenu(false)} />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </div>
        <ShoppingCart />
      </nav>
    </>
  );
};

export default Navbar;
