import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { changeItems, delItem } from "../redux/cartSlice";
import { ButtonStyle } from "../style/theme";

const CartButtons = ({ product, style }) => {
  const cartProduct = useSelector((state) => {
    return state.cart.products.find((pr) => pr.id === product.id);
  });

  const dispatch = useDispatch();

  const [addToCart, setAddToCart] = useState(false);
  const [quantity, setQuantity] = useState(null);

  useEffect(() => {
    if (cartProduct) {
      setAddToCart(cartProduct.inCart);
      setQuantity(cartProduct.quantity);
    } else {
      setAddToCart(false);
      setQuantity(null);
    }
  }, [cartProduct]);

  useEffect(() => {
    if (quantity !== null) {
      if (quantity !== 0) {
        dispatch(
          changeItems({
            id: product.id,
            title: product.title,
            thumbnail: product.thumbnail,
            price: product.price,
            discountPercentage: product.discountPercentage,
            brand: product.brand,
            quantity: quantity,
            inCart: addToCart,
          })
        );
      } else {
        setAddToCart(false);
        dispatch(delItem(product.id));
      }
    }
  }, [quantity]);

  const handleChangeItems = (e) => {
    // setQuantity((prev) => prev + 1);

    e.preventDefault();
    e.target.name === "addToCart"
      ? setQuantity((prev) => prev + 1)
      : setQuantity((prev) => prev + 1);

    e.target.name === "addToCart" && setAddToCart(!addToCart);
  };

  const del = (e) => {
    e.preventDefault();
    if (style === "cart" && product.quantity === 1) return;

    setQuantity((prev) => prev - 1);
  };

  return (
    <div onClick={(e) => e.preventDefault()} className="w-full cursor-default">
      <div className="flex justify-center items-center">
        {!addToCart ? (
          <button
            name="addToCart"
            type="button"
            onClick={handleChangeItems}
            className={ButtonStyle[style].addToCart}
          >
            Add to Cart
          </button>
        ) : (
          <div className={ButtonStyle[style].amountButtonBorder}>
            <button
              name="delItem"
              onClick={del}
              className={`${ButtonStyle[style].amountButton} ${
                style === "cart" ? "rounded-s-md" : "rounded-s-full"
              }`}
            >
              -
            </button>
            <h1 className="text-base">{quantity}</h1>
            <button
              name="addItem"
              onClick={handleChangeItems}
              className={`${ButtonStyle[style].amountButton} ${
                style === "cart" ? "rounded-e-md" : "rounded-e-full"
              }`}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

CartButtons.propTypes = {
  product: PropTypes.array,
  style: PropTypes.string,
};

export default CartButtons;
