import React, { useRef, useState } from "react";
import { EventCard } from "../components";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();

  const slides = [0, 1, 2, 3];

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    adaptiveHeight: true,
    arrows: false,
    draggable: true,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-24 bg-primary">
      <div className="flex flex-col gap-5 text-center">
        <h3 className="text-secondary  font-roboto">
          LATEST FROM OUR EVENTS & TRAINING
        </h3>

        <h2 className="text-4xl font-pt font-bold text-white">
          Events & Training
        </h2>
      </div>

      <div className="container mt-16 gap-5">
        <Slider {...settings}>
          <EventCard
            date="Nov, 2023"
            header="3 Days Pre-COP28 Training for Climate Decision Makers"
            img="https://plus.unsplash.com/premium_photo-1661766222233-e617a1180fa2?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaCUyMHRyYWluaW5nfGVufDB8fDB8fHww"
          />
          <EventCard
            date="Dec, 2023"
            header="National Delegate, COP28"
            img="https://images.unsplash.com/photo-1529673203658-56306382b724?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TmF0aW9uYWx8ZW58MHx8MHx8fDA%3D"
          />

          <EventCard
            date="Dec, 2023"
            header="COP28 side event for NICCRA on Circular Ecosystem"
            img="https://plus.unsplash.com/premium_photo-1661582120130-03b9bdc47a75?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaCUyMHRyYWluaW5nfGVufDB8fDB8fHww"
          />
          <EventCard
            date="April, 2024"
            header="International Conference on Energy Transitions"
            img="https://plus.unsplash.com/premium_photo-1673254850588-a8d03439ce3e?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW5lcmd5fGVufDB8fDB8fHww"
          />
        </Slider>
      </div>

      {/* <div className="flex mt-5 top-4 justify-center py-2 gap-2">
        {slides.map((item, i) => (
          <div
            key={i}
            onClick={() => scrollToSlide(i)}
            className={`bg-white w-5 h-3 rounded-full cursor-pointer ${
              i === currentIndex ? "w-8" : ""
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Events;
