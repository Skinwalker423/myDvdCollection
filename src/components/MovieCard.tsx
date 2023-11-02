interface MovieProps {
  movie: {
    id: number;
    title: string;
    image: string;
    year: number;
  };
}

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
