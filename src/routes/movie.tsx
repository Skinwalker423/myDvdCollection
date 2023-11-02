import { useParams } from "react-router-dom";
import { collection } from "../../data/collection";

const Movie = () => {
  const { movieId } = useParams();

  if (!movieId) return "loading...";

  const foundMovie = collection.find(
    (movie) => movieId === movie.id.toString()
  );

  if (!foundMovie) return "No such movie";

  let location = "";
  if (foundMovie.id < 19) {
    location = `First row, ${foundMovie.id} going in from the left`;
  }
  return (
    <main className='flex justify-center gap-5'>
      <img
        src={foundMovie.image}
        alt={foundMovie.title}
        width={500}
        height={500}
      />
      <section>
        <h1 className='text-6xl'>{foundMovie?.title}</h1>
        <p>Year: {foundMovie.year}</p>
        <p>found: {location}</p>
      </section>
    </main>
  );
};

export default Movie;
