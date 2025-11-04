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
    <div className='flex flex-row items-center justify-center gap-4 px-6 md:px-16 lg:px-36 bg-cover bg-center h-screen' style={{backgroundImage: `url(${slide.image})`}}>
      {/* <img
        src={assets.marvelLogo}
        alt="marvelLogo"
        className="max-h-11 lg:h-11 mt-20"
      />

      <h1 className="text-5xl md:text-[70px] md:leading-18 font-semibold">
        Guardians <br /> of the Galaxy
      </h1> */}
<button className='flex h-11 w-20 bg-purple-800 rounded-full text-2xl items-center justify-center' onClick={prevSlide}><FaLessThan /></button>
<div className="flex flex-col gap-4">
<h1 className='text-5xl flex font-extrabold font-sans' style={{color:slide.styles.hcolor}}>{slide.title}</h1>
<p className='text-xl flex font-bold font-serif' style={{color:slide.styles.pcolor}}>{slide.description}</p>
<a className='text-3xl font-semibold font-serif' href={slide.link} target='_blank' style={{color:slide.styles.tcolor}}>Watch Trailer</a>
</div>
{/* <button className='flex h-11 w-12 bg-indigo-800 rounded-full text-2xl items-center justify-center' onClick={nextSlide}><FaGreaterThan /></button> */}
<button className='flex h-10 w-20 bg-indigo-800 rounded-full text-2xl items-center justify-center' onClick={nextSlide}><FaGreaterThan /></button>
      {/* <div className="flex items-center gap-4 text-gray-300">
        <span>Action | Adventure | Sci-Fi</span>
        <div className="flex items-center gap-1">
          <CalendarIcon className="w-4.5 h-4.5" /> 2018
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="w-4.5 h-4.5" /> 2h 8m
        </div>
      </div>
      <p className="max-w-md text-gray-300">
        In a post-apocalyptic world where cities ride on wheels and consume each
        other to survive, two people meet in London and try to stop a
        conspiracy.
      </p>
      <button
        onClick={() => navigate("/movies")}
        className="flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
      >
        Explore Movies
        <ArrowRight className="w-5 h-5" />
      </button> */}
    </div>
  );
};

export default HeroSection;
