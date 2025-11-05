import React from 'react';
import {newdata} from './Newdata';
import {Link} from 'react-router-dom';
const Newmovie = () => {
return (
<div className='h-auto hw-full'>
<h1 className='text-2xl font-sans font-bold text-center' style={{paddingTop:'7px'}}>Upcoming Movies</h1>
  <div className='grid grid-cols-4' style={{gap:'20px' , padding:'30px'}}>
    {newdata.map((newmovie) => (
        <Link to={`/newmovie/${newmovie.id}`} onClick={() => {
            scrollTo(0, 0);
          }} key={newmovie.id}  className="min-h-110 w-75 rounded-xl text-white text-3xl flex flex-col trans">
        <img
              src={newmovie.movieimg}
              alt={newmovie.moviename}
              className="h-87 w-75 object-cover rounded-xl object-top"
            />
            <h2 className="text-2xl font-sans font-bold">{newmovie.moviename}</h2>
            <p className="text-xl font-serif">{newmovie.moviegenre}</p>
            <p className="text-sm font-serif">{newmovie.movielang}</p>
            </Link>
    ))}
  </div>
  </div>
)
};
export default Newmovie;