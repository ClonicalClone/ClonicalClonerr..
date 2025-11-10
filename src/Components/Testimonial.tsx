"use client";

import { useState, useId } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";

interface TestimonialData {
  name: string;
  title: string;
  quote: string;
}

interface SlideProps {
  testimonial: TestimonialData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ testimonial, index, current, handleSlideClick }: SlideProps) => {
  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10 bg-black border border-white  rounded-[2%] overflow-hidden"
        onClick={() => handleSlideClick(index)}
        style={{
          transform:
            current !== index
              ? "scale(0.96) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <article
          className={`relative p-[4vmin] transition-opacity duration-700 ease-in-out ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <FaQuoteRight className="inline-block w-8 h-8 text-white mb-8" />
          <p className="leading-relaxed text-lg text-neutral-400">
            “{testimonial.quote}”
          </p>
          <span className="inline-block h-1 w-10 rounded bg-white mt-8 mb-6"></span>
          <h2 className="text-white font-medium title-font tracking-wider text-sm">
            {testimonial.name}
          </h2>
          <p className="text-gray-400">{testimonial.title}</p>
        </article>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: "previous" | "next";
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-black  border-3 border-transparent rounded-full focus:border-white focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <BiRightArrowAlt className="text-white" />
    </button>
  );
};

interface CarouselProps {
  slides: TestimonialData[];
}

function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) setCurrent(index);
  };

  const id = useId();

  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((testimonial, index) => (
          <Slide
            key={index}
            testimonial={testimonial}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Previous testimonial"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Next testimonial"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}

export default function Testimonial() {
  const testimonialData: TestimonialData[] = [
    {
      name: "Rahul Mehra",
      title: "Intraday Trader",
      quote:
        "I recently purchased a Rolex watch from this store. The ordering process was simple, the delivery was fast. The watch itself is stunning and authentic. ",
    },
    {
      name: "Amit Sharma",
      title: "Finance Analyst",
      quote:
        "Exceptional service and quality! I ordered a Tag Heuer for my anniversary, and the staff went above and beyond to ensure timely delivery.",
    },
    {
      name: "Neha Kapoor",
      title: "Creative Director",
      quote:
        "I’ve bought several watches online, but this was by far the smoothest experience. Great packaging, fast delivery, and beautiful craftsmanship.",
    },
    {
      name: "Rohit Sinha",
      title: "Entrepreneur",
      quote:
        "Amazing collection and professional service. I had a question about sizing and received prompt help. The product exceeded expectations — elegant and luxurious.",
    },
  ];

  return (
    <section className="text-gray-600 body-font relative overflow-hidden w-full h-full py-20">
      <div className="container px-5 py-10 mx-auto">
        <h2 className="text-white text-3xl font-medium title-font mb-12 flex text-center w-full justify-center items-center">
          Testimonials
        </h2>

        <Carousel slides={testimonialData} />
      </div>
    </section>
  );
}
