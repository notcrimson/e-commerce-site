import PropTypes from "prop-types";
import { resetCart } from "../redux/cartSlice";

function ProductsInCart({ products, dispatch }) {
  return (
    <div className="mt-6 mx-4 ">
      <div className="mb-6 ">
        <div className=" flex justify-center flex-col gap-y-4">
          {products?.map((product) => (
            <div
              key={product.id}
              className=" flex flex-col justify-between   border border-black p-2"
            >
              <h1 className="text-center">{product.title}</h1>
              <div className="flex flex-row justify-between items-center">
                <div className="w-[100px] h-[70px] flex items-center rounded-2xl p-2 flex-row">
                  <img src={product.thumbnail} className="object-cover w-full h-full" />
                </div>
                <h1 className="text-center">
                  {product.price}
                  <span className="text-sm"> &#36;</span>
                </h1>
              </div>
              <p className="text-end">Amount: {product.quantity}</p>
            </div>
          ))}
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
