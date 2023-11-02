import { MovieProps } from "../../types";

const MovieCard = ({ movie }: MovieProps) => {
  return (
    <a href={`/movies/${movie.id}`}>
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
    </a>
  );
};

export default MovieCard;
