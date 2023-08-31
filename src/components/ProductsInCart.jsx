import PropTypes from "prop-types";
import { BsTrash3Fill } from "react-icons/bs";

import { delItem, resetCart } from "../redux/cartSlice";
import Price from "./Price";
import { CartButtons } from "../components";

function ProductsInCart({ products, dispatch }) {
  const sum = () => {
    const discountPrice = products?.map(
      (product) =>
        +(
          ((product.price * (100 - product.discountPercentage)) / 100).toFixed(2) * product.quantity
        )
    );
    return (
      discountPrice.length && discountPrice?.reduce((prev, current) => prev + current).toFixed(2)
    );
  };

  const saleAmount = () => {
    const sale = products?.map(
      (product) =>
        +(((product.price * product.discountPercentage) / 100).toFixed(2) * product.quantity)
    );
    return sale.length && sale?.reduce((prev, current) => prev + current).toFixed(2);
  };

  return (
    <div className="mt-6 mx-4 ">
      <div className="mb-6 ">
        <div className=" flex justify-center flex-col gap-y-4">
          {products?.map((product) => (
            <div
              key={product.id}
              className=" flex flex-col justify-between p-2  border border-gray rounded-2xl"
            >
              <h1 className="text-center">{product.title}</h1>
              <div className="flex flex-row justify-between items-center">
                <div className="w-[250px] h-[70px] flex items-center rounded-2xl p-2 flex-row">
                  <img src={product.thumbnail} className="object-cover w-full h-full" />
                </div>

                <CartButtons product={product} style="cart" />

                <h1 className="text-center font-extrabold text-secondary-500 w-full">
                  <Price price={product.price} discountPercentage={product.discountPercentage} />
                </h1>
              </div>
              <BsTrash3Fill
                onClick={() => dispatch(delItem(product.id))}
                size={18}
                className="text-red-600 transintion duration-150 cursor-pointer hover:text-secondary-500 active:text-secondary-300"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="py-2 text-end flex flex-col items-end">
        <div className="flex justify-between w-full items-center">
          <h1>Sale:</h1>
          <h1 className=" text-white bg-secondary-500 px-2 border border-none rounded-lg">
            {saleAmount()} &#36;
          </h1>
        </div>
        <div className="flex justify-between w-full items-center">
          <h1>Total:</h1>
          <h1 className="text-xl">{sum()} &#36;</h1>
        </div>
      </div>
      <button
        className="static px-4 py-1 border border-black rounded-2xl"
        onClick={() => dispatch(resetCart())}
      >
        clear cart
      </button>
    </div>
  );
}

ProductsInCart.propTypes = {
  products: PropTypes.array,
  dispatch: PropTypes.func,
};

export default ProductsInCart;
