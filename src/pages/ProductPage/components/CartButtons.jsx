import { useEffect, useReducer, useState } from "react";
import "../productpage.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      return { itemsAdded: state.itemsAdded + 1 };
    }
    case "delete": {
      return { itemsAdded: state.itemsAdded - 1 };
    }
  }
};

const CartButtons = () => {
  const [addToCart, setAddToCart] = useState(false);
  const [state, dispatch] = useReducer(reducer, { itemsAdded: null });

  useEffect(() => {
    state.itemsAdded === 0 && setAddToCart(false);
  }, [state.itemsAdded]);

  const handleChangeCartClick = (e) => {
    // e.target.name === "delItem" && dispatch({ type: "delete" }) ;
    if (e.target.name === "delItem") {
      dispatch({ type: "delete" });
      return;
    }
    dispatch({ type: "add" });
    e.target.name === "addToCart" && setAddToCart(!addToCart);
  };

  return (
    <div>
    
      <div className="flex justify-center items-center">
        {!addToCart ? (
          <button
            name="addToCart"
            type="button"
            onClick={handleChangeCartClick}
            className="border border-white rounded-full bg-secondary-300/70 px-4 py-2 hover:bg-secondary-300 w-full h-[44.5px]"
          >
            Add to Cart
          </button>
        ) : (
          <div className="text-[27px] flex flex-row justify-between items-center border border-secondary-300 w-full rounded-full">
            <button
              name="delItem"
              onClick={handleChangeCartClick}
              className="productpage__cartbuttons-changeItems rounded-s-full"
            >
              -
            </button>
            <h1 className="text-base">{state.itemsAdded}</h1>
            <button
              name="addItem"
              onClick={handleChangeCartClick}
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

export default CartButtons;
