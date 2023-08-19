import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Products = ({ data }) => {
  return (
    <>
      {data?.map((card) => (
        <div
          key={card.id}
          className="relative  group transition-all duration-300 hover:bg-secondary-300 ease-in-out border border-none rounded-xl my-2"
        >
          <Link to={`/product/${card.id}`}>
            <div
              className="  px-[2rem] py-4  bg-secondary-300/70
          border border-none rounded-xl
              flex justify-center flex-col pb-20"
            >
              <h1 className="group-hover:text-white mb-10 text-2xl">{card.name}</h1>

              <p className="group-hover:text-white text-center text-lg">{card.description}</p>

              <p className="group-hover:text-white text-lg text-center text-black/70 font-normal mb-4">
                Click to see fully
              </p>
              <p className="capitalize">Type: {card.type}</p>
            </div>
          </Link>
          <div className="absolute bottom-6 left-[10%] right-[10%] flex">
            <button className="hover:bg-white/40 hover:shadow-xl active:bg-white/70 active:border-white/0  active:drop-shadow-xl border border-solid border-black rounded-3xl p-2 grow">
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

Products.propTypes = {
  data: PropTypes.object,
};

export default Products;
