import { MovieProps } from "../../types";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }: MovieProps) => {
  return (
    <li className='w-full h-full max-w-6xl hover:scale-105 transition-transform rounded-lg py-4 px-2 bg-slate-200'>
      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
  );
};

export default MovieCard;
