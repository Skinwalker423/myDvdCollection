import { MovieProps } from "../../types";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }: MovieProps) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <div className='h-full shadow-lg hover:scale-105 transition-transform'>
        <div className='py-4 px-2 w-72 bg-slate-400'>
          <h3 className='text-white z-50 text-sm'>
            {movie.title}
          </h3>
        </div>
        <div className='w-72 h-96'>
          <img
            className='object-cover w-full h-full'
            src={movie.image}
            alt={movie.title}
          />
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
