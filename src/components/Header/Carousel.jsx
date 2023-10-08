import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { useEffect, useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      !paused && nextSlide();
    }, 4000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div
      className="slider bg-secondaryDark w-screen border-none rounded-[50px] flex overflow-hidden relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="arrows_div">
        <div className="arrows left-0" onClick={prevSlide}>
          <MdOutlineArrowBackIos size="25" />
        </div>
        <div className="arrows right-0" onClick={nextSlide}>
          <MdOutlineArrowForwardIos size="25" />
        </div>
      </div>

      <div
        className="container flex w-full transition-all duration-1000 ease-in-out"
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
