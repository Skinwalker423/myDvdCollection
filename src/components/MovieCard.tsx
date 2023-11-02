import { MovieProps } from "../../types";

const MovieCard = ({ movie }: MovieProps) => {
  return (
    <>
      <div className='py-4 px-2 w-72 bg-slate-400'>
        <h3 className='text-white z-50'>{movie.title}</h3>
      </div>
      <div className='w-72 h-80'>
        <img
          className='object-cover w-full h-full'
          src={movie.image}
          alt={movie.title}
        />
      </div>
    </>
  );
};

export default MovieCard;
