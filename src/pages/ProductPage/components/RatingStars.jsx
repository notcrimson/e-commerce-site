import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import PropTypes from "prop-types";
import { memo } from "react";

const RatingStars = memo(({ rating }) => {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index}>
        {rating >= index + 1 || rating >= index + 0.7 ? (
          <BsStarFill className="text-secondary-500" />
        ) : rating >= index + 0.5 || rating >= index + 0.2 ? (
          <BsStarHalf className="text-secondary-500" />
        ) : (
          <BsStar className="text-secondary-500" />
        )}
      </span>
    );
  });
  return (
    <div className="flex flex-row justify-start items-center gap-[6px] my-2 px-[10px]">
      <h1 className="text-sm flex">{rating}</h1>
      <div className="flex flex-row ">{ratingStar}</div>
    </div>
  );
});
RatingStars.displayName = "RatingStars";
RatingStars.propTypes = {
  rating: PropTypes.number,
};

export default RatingStars;
