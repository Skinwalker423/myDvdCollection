import { MovieProps } from "../../types";

const MovieCard = ({ movie }: MovieProps) => {
  return (
    <li>
      <h3>{movie.title}</h3>
      <img
        src={movie.image}
        alt={movie.title}
        width={250}
        height={350}
      />
    </li>
  );
};

export default MovieCard;
