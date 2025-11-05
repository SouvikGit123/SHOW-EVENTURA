import { StarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import timeFormat from "../lib/timeFormat";
import { useAppContext } from "../context/AppContext";
const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const { image_base_url } = useAppContext();

  return (
    <div className="min-h-110 w-75 rounded-xl text-white text-3xl flex flex-col hover:-translate-y-2 transition duration-300">
      <img
        onClick={() => {
          navigate(`/movies/${movie._id}`);
          scrollTo(0, 0);
        }}
        src={image_base_url + movie.backdrop_path}
        alt="poster"
        className="h-87 w-75 object-cover rounded-xl cursor-pointer"
      />

      <p className="font-semibold mt-2 truncate text-2xl font-sans">{movie.title}</p>

      <p className="text-gray-400 mt-2 text-sm font-serif">
        {new Date(movie.release_date).getFullYear()} •{" "}
        {movie.genres
          .slice(0, 2)
          .map((genre) => genre.name)
          .join(" | ")}{" "}
        • {timeFormat(movie.runtime)}
      </p>


      <div className="flex items-center justify-between mt-4 pb-3">
        {/* <button
          onClick={() => {
            navigate(`/movies/${movie._id}`);
            scrollTo(0, 0);
          }}
          className="px-4 py-2 text-xs bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
        >
          Buy Tickets
        </button> */}
        <p className="flex items-center gap-1 text-lg text-gray-400 mt-1 pr-1">
          <StarIcon className="w-5 h-5 text-primary fill-primary" />
          {movie.vote_average.toFixed(1)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
