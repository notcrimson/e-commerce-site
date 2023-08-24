import React from "react";

const CartButtons = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <button
          type="button"
          className="border border-none rounded-full bg-secondary-300/70 px-4 py-2 hover:bg-secondary-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CartButtons;
