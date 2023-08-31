import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { changeItems } from "../redux/cartSlice";

//TODO: DELETE THIS COMPONENT CAUSE CARTBUTTON DOES THE SAME

const AmountButtons = ({ product }) => {
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(
      changeItems({
        id: product.id,
        quantity: product.quantity + 1,
      })
    );
  };
  const del = () => {
    if (product.quantity === 1) return;

    dispatch(
      changeItems({
        id: product.id,
        quantity: product.quantity - 1,
      })
    );
  };

  return (
    <div className="text-base flex flex-row justify-between items-center border border-secondary-300 w-[75px] h-full rounded-lg ">
      <button
        id="del"
        name="del"
        onClick={del}
        className="px-2 bg-secondary-300 border border-secondary-300 rounded-s-md"
      >
        -
      </button>
      <h1 className="text-base">{product.quantity}</h1>
      <button
        name="addItem"
        onClick={addItem}
        className="px-2 bg-secondary-300 border border-secondary-300 rounded-e-md"
      >
        +
      </button>
    </div>
  );
};

AmountButtons.propTypes = {
  product: PropTypes.object,
};

export default AmountButtons;
