import PropTypes from "prop-types";

const About = ({ about: { brand, category, stock } }) => {
  return (
    <div className="text-textSecondary border">
      <h1 className="text-xl font-semibold text-center">About</h1>
      <div className="#about# text-sm">
        <h1 className="">
          <span className="text-left">Brand: </span>
          <span className="text-right">{brand}</span>
        </h1>
        <h1>Category: {category}</h1>
        <h1>Stock: {stock}</h1>
      </div>
    </div>
  );
};

About.propTypes = {
  about: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
  }),
};

export default About;
