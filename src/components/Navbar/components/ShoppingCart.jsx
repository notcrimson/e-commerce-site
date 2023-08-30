import { FaShoppingCart } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";

import { ProductsInCart } from "../../../components";

const ShoppingCart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <div className="relative">
      <div className="shopping-cart flex justify-center items-center relative gap-4">
        <div
          onClick={onOpen}
          className="relative cursor-pointer transition-all duration-300 group ease-out"
        >
          <FaShoppingCart className="text-black group-hover:text-white z-0" size={27} />
          <p
            className="text-xs text-center absolute z-1 bottom-[18px] left-[14px] bg-red-700
          w-4 border border-none rounded-full text-white group-hover:bg-black"
          >
            {products.length ? products.length : null}
          </p>
        </div>
      </div>
      <Transition show={isOpen} appear as={Fragment}>
        <Dialog open={isOpen} as="div" className="static" onClose={onClose}>
          <div className="fixed inset-0 bg-black bg-opacity-25 z-30" />
          <div className="fixed inset-0 z-40 flex">
            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
              <div className="flex flex-center justify-end px-2">
                <RiCloseLine
                  size={27}
                  onClick={onClose}
                  className="cursor-pointer transition duration-150 hover:text-black/30 ease-in-out"
                />
              </div>
              <ProductsInCart products={products} dispatch={dispatch} />
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ShoppingCart;
