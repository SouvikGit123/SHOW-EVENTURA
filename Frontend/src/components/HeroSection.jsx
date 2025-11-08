import React,{useState} from "react";
import { assets } from "../assets/assets";
import {FaLessThan} from "react-icons/fa";
import {FaGreaterThan} from "react-icons/fa";
import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
const slides = [
  {
    id: 50,
    image: "https://images.wallpapersden.com/image/download/monsters-of-godzilla-x-kong-the-new-empire-movie_bmdqaGeUmZqaraWkpJRobWllrWdma2U.jpg",
    title: "Godzilla X Kong : The New Empire",
    description: "An all-new adventure that pits the almighty Kong and the fearsome Godzilla against a colossal undiscovered threat hidden within our world, challenging their very existence-and our own.",
    link: "https://youtu.be/lV1OOlGwExM?si=cgonW_NlOCW04yBf",
    styles:{
      hcolor:"#11224E",
      pcolor:"black",
      tcolor:"#ECF4E8",
    },
  },
  {
    id: 51,
    image: "https://image.tmdb.org/t/p/original/dFONBBz4BkmtZm73Ym8q5GBJ1TT.jpg",
    title: "ZOOTOPIA",
    description: "The modern mammal metropolis of Zootopia is a city like no other.  ",
    link: "https://youtu.be/jWM0ct-OLsM?si=ImQjup4qPm6U6d5h",
    styles:{
      hcolor:"#700b04ff",
      pcolor:"black",
      tcolor:"#F2EAD3",
    },
  },
  {
    id: 52,
    image: "https://wallpapercave.com/wp/wp8218900.jpg",
    title: "MASTER",
    description: "An alcoholic professor is sent to a juvenile school, where he clashes with a gangster, who uses the children of the school for criminal activities.",
    link: "https://youtu.be/1_iUFT3nWHk?si=bg_XpQ9alx_blUGw",
    styles:{
      hcolor:"#CBCBCB",
      pcolor:"black",
      tcolor:"#F2EAD3",
    },
  },
];
const HeroSection = () => {
  const navigate = useNavigate();
     const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const slide = slides[current];
  return (
//     <div className='flex flex-row items-center justify-center gap-4 px-6 md:px-16 lg:px-36 bg-cover bg-center h-screen' style={{backgroundImage: `url(${slide.image})`}}>
// <button className='flex h-11 w-20 bg-purple-800 rounded-full text-2xl items-center justify-center' onClick={prevSlide}><FaLessThan /></button>
// <div className="flex flex-col gap-4">
// <h1 className='text-5xl flex font-extrabold font-sans' style={{color:slide.styles.hcolor}}>{slide.title}</h1>
// <p className='text-xl flex font-bold font-serif' style={{color:slide.styles.pcolor}}>{slide.description}</p>
// <a className='text-3xl font-semibold font-serif' href={slide.link} target='_blank' style={{color:slide.styles.tcolor}}>Watch Trailer</a>
// </div>
// <button className='flex h-10 w-20 bg-indigo-800 rounded-full text-2xl items-center justify-center' onClick={nextSlide}><FaGreaterThan /></button>
//     </div>
<div
  className='flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-16 lg:px-36 bg-cover bg-center h-screen text-center md:text-left'
  style={{ backgroundImage: `url(${slide.image})` }}
>
  {/* Left button (visible only on md and up) */}
  <button
    className='hidden md:flex h-11 w-20 bg-purple-800 rounded-full text-2xl items-center justify-center'
    onClick={prevSlide}
  >
    <FaLessThan />
  </button>

  {/* Text content */}
  <div className='flex flex-col gap-4 max-w-xs sm:max-w-sm md:max-w-lg'>
    <h1
      className='text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans'
      style={{ color: slide.styles.hcolor }}
    >
      {slide.title}
    </h1>
    <p
      className='text-base sm:text-lg md:text-xl font-bold font-serif'
      style={{ color: slide.styles.pcolor }}
    >
      {slide.description}
    </p>
    <a
      className='text-xl sm:text-2xl md:text-3xl font-semibold font-serif'
      href={slide.link}
      target='_blank'
      style={{ color: slide.styles.tcolor }}
    >
      Watch Trailer
    </a>

    {/* Buttons below content (only on mobile) */}
    <div className='flex md:hidden items-center justify-center gap-6 mt-4'>
      <button
        className='flex h-10 w-16 bg-purple-800 rounded-full text-2xl items-center justify-center'
        onClick={prevSlide}
      >
        <FaLessThan />
      </button>
      <button
        className='flex h-10 w-16 bg-indigo-800 rounded-full text-2xl items-center justify-center'
        onClick={nextSlide}
      >
        <FaGreaterThan />
      </button>
    </div>
  </div>

  {/* Right button (visible only on md and up) */}
  <button
    className='hidden md:flex h-10 w-20 bg-indigo-800 rounded-full text-2xl items-center justify-center'
    onClick={nextSlide}
  >
    <FaGreaterThan />
  </button>
</div>

  );
};

export default HeroSection;
