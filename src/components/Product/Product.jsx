import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Product = ({ card: { id, name, description, image } }) => {
  return (
    <div>
      <Link to={`/product/${id}`}>
        <div
          className=" border border-none rounded-xl px-[2rem] py-4 my-2 bg-secondary-300/70
              group transition-all duration-300 hover:bg-secondary-300
              flex justify-center flex-col"
        >
          <h1 className="group-hover:text-white mb-10 text-2xl">{name}</h1>

          <p className="group-hover:text-white text-center text-lg">{description}</p>

          <p className="group-hover:text-white text-lg text-center text-black/70 font-normal mb-4">
            Click to see fully
          </p>
          <Link>
            <button className="hover:bg-white/40 active:bg-white/70 active:border-white/0 hover:shadow-xl active:drop-shadow-xl border border-solid border-black rounded-3xl p-2 ">
              Add to cart
            </button>
          </Link>
        </div>
      </Link>
    </div>
  );
};

Product.propTypes = {
  card: PropTypes.object,
};

export default Product;
