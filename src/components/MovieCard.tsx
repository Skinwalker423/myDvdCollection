import { MovieProps } from "../../types";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }: MovieProps) => {
  const img =
    movie.image === ""
      ? "/images/defaultImg.png"
      : movie.image;

  return (
    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
  );
};

export default MovieCard;
