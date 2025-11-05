import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useAppContext } from "../context/AppContext";

const FeaturedSection = () => {
  const navigate = useNavigate();
  const { shows } = useAppContext();

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">
      <div className="relative flex items-center justify-between pt-10 pb-10">
      <h1 className='flex text-2xl font-sans font-bold text-center' style={{paddingLeft:'7px'}}>Now Showing</h1>
        <button
          onClick={() => {
            navigate("/movies");
            scrollTo(0, 0);
          }}
          className="px-10 py-3 bg-primary hover:bg-primary-dull transition rounded-md text-lg font=-serif cursor-pointer"
      >
          Show more
        </button>
      </div>

      <div className="flex flex-wrap max-sm:justify-center gap-8 mt-8">
        {shows.slice(0, 4).map((show) => (
          <MovieCard key={show._id} movie={show} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
