import PropTypes from "prop-types";

const Price = ({ price, discountPercentage }) => {
  return (
    <span>
      {((price * (100 - discountPercentage)) / 100).toFixed(2)}{" "}
      <span className="text-base"> &#36;</span>
    </span>
  );
};

Price.propTypes = {
  price: PropTypes.number,
  discountPercentage: PropTypes.number,
};

export default Price;
