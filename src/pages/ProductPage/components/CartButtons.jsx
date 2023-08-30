import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import "../productpage.css";
import { changeItems, delItem } from "../../../redux/cartSlice";
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "add": {
//       return { itemsAdded: state.itemsAdded + 1 };
//     }
//     case "delete": {
//       return { itemsAdded: state.itemsAdded - 1 };
//     }
//   }
// };

const CartButtons = ({ product }) => {
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

  // const [state, dispatch] = useReducer(reducer, { itemsAdded: null });

  // useEffect(() => {
  //   state.itemsAdded === 0 && setAddToCart(false);
  // }, [state.itemsAdded]);

  // const handleChangeCartClick = (e) => {
  //   // e.target.name === "delItem" && dispatch({ type: "delete" }) ;
  //   if (e.target.name === "delItem") {
  //     dispatch({ type: "delete" });
  //     return;
  //   }

  //   e.target.name === "addToCart" && setAddToCart(!addToCart);
  // };

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
    e.target.name === "delItem"
      ? setQuantity((prev) => prev - 1)
      : e.target.name === "addToCart"
      ? setQuantity((prev) => prev + 1)
      : setQuantity((prev) => prev + 1);

    e.target.name === "addToCart" && setAddToCart(!addToCart);
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        {!addToCart ? (
          <button
            name="addToCart"
            type="button"
            onClick={handleChangeItems}
            className="border border-white rounded-full bg-secondary-300/70 px-4 py-2 hover:bg-secondary-300 w-full h-[44.5px]"
          >
            Add to Cart
          </button>
        ) : (
          <div className="text-[27px] flex flex-row justify-between items-center border border-secondary-300 w-full rounded-full">
            <button
              name="delItem"
              onClick={handleChangeItems}
              className="productpage__cartbuttons-changeItems rounded-s-full"
            >
              -
            </button>
            <h1 className="text-base">{quantity}</h1>
            <button
              name="addItem"
              onClick={handleChangeItems}
              className="productpage__cartbuttons-changeItems rounded-e-full"
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
};

export default CartButtons;
