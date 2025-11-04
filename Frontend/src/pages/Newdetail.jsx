import React from "react";
import './assets/css/Newdetail.css';
import { useParams,Link } from 'react-router-dom';
import { newdata } from './Newdata';
import {AiFillLike} from 'react-icons/ai';
import {FaYoutube} from 'react-icons/fa';
const Newdetail = () => {
    const { id } = useParams();
      const movie = newdata.find((m) => m.id === parseInt(id));
    
      if (!movie) {
        return <p>Not found</p>;
      }
    
  return <div className="detail-main">
    <Link to="/" className="h-8 w-40 bg-linear-65 from-purple-900 to-pink-700 rounded-xl flex text-xl font-mono items-center justify-center m-4">Back to Home</Link>
          <div className="min-h-110 w-full flex flex-row items-center justify-evenly relative top-1">
            <img src={movie.bgimg} alt={movie.moviename} className="h-105 w-75 object-cover object-top rounded-lg" />
            <div className="flex flex-col gap-5">
              <div className="flex flex-row gap-10">
              <h1 className="text-4xl font-bold font-sans">{movie.moviename}</h1>
              <p className="text-2xl font-serif flex flex-row items-center gap-2">{movie.likes}  <AiFillLike className="text-green-500"/></p>
              </div>
              <div className="flex flex-row gap-3">
              <h1 className="text-xl font-serif text-gray-300">Releasing on {movie.reldate}</h1>
              {/* <p className="text-xl font-serif flex flex-row items-center gap-2">| {movie.runtime}</p> */}
              </div>
              <p className="text-xl min-h-20 w-250 font-serif">{movie.moviedesc}</p>
              {/* <div className="flex flex-row gap-3"> */}
                <a href={movie.trailerlink} target="_blank" rel="noopener noreferrer" className="h-12 w-45 bg-red-600 rounded-xl flex text-xl font-serif items-center justify-center gap-2"><FaYoutube /> Watch Trailer</a>
                {/* <button className="h-12 w-45 bg-linear-to-r from-cyan-700 to-blue-900 rounded-lg font-serif text-xl">Book Your Tickets</button> */}
              {/* </div> */}
                
              </div>
              </div>
              <h2 className="text-3xl font-bold font-sans">Cast</h2>
              <div className="min-h-40 w-full flex flex-row items-center justify-evenly">
              {movie.cast.map((member) => (
                    <div key={member.id} className="flex flex-col items-center gap-2">
                      <img src={member.img} alt={member.name} className="h-30 w-30 object-cover rounded-full" />
                      <p className="text-xl font-serif">{member.name}</p>
                      <p className="text-xl font-serif text-gray-400">{member.role}</p>
                    </div>
                  ))}</div>
                   <h2 className="text-3xl font-bold font-sans">Crew</h2>
              <div className="min-h-40 w-full flex flex-row items-center justify-evenly">
              {movie.crew.map((member) => (
                    <div key={member.id} className="flex flex-col items-center gap-2">
                      <img src={member.img} alt={member.name} className="h-30 w-30 object-cover rounded-full" />
                      <p className="text-xl font-serif">{member.name}</p>
                      <p className="text-xl font-serif text-gray-400">{member.role}</p>
                    </div>
                  ))}</div>
  </div>;
}
export default Newdetail;