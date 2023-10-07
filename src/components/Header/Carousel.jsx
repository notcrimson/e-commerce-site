import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider bg-secondaryDark w-screen border-none rounded-[50px] flex overflow-hidden relative">
      <div className="absolute left-0 top-[50%] -translate-x-0 translate-y-[-50%] flex justify-between w-full z-10">
        <div className="arrows" onClick={prevSlide}>
          <MdOutlineArrowBackIos size="25" />
        </div>
        <div className="arrows" onClick={nextSlide}>
          <MdOutlineArrowForwardIos size="25" />
        </div>
      </div>

      <div
        className="container flex w-full transition-all duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <div className="slides">
          <h1 className="text-5xl text-center">First text</h1>
        </div>
        <div className="slides">
          <h1 className="text-5xl text-center">Second text</h1>
        </div>
        <div className="slides">
          <h1 className="text-5xl text-center">Third text</h1>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
