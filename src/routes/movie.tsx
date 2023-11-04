import { useParams } from "react-router-dom";
import { collection } from "../../data/collection";

const Movie = () => {
  const { movieId } = useParams();

  if (!movieId) return "loading...";

  const foundMovie = collection.find(
    (movie) => movieId === movie.id.toString()
  );

  if (!foundMovie) return "No such movie";

  const img =
    foundMovie.image === ""
      ? "/images/defaultImg.png"
      : foundMovie.image;

  let location = "";
  if (foundMovie.id < 19) {
    location = `First row, ${foundMovie.id} going in from the left`;
  } else if (foundMovie.id < 46) {
    location = `Second row, ${
      foundMovie.id - 19
    } going in from the left`;
  } else if (foundMovie.id < 81) {
    location = `Thrid row, ${
      foundMovie.id - 45
    } going in from the left`;
  } else if (foundMovie.id < 121) {
    location = `Fourth row, ${
      foundMovie.id - 80
    } going in from the left`;
  } else if (foundMovie.id < 159) {
    location = `Second row, ${
      foundMovie.id - 120
    } going in from the left`;
  } else {
    location = "Not found";
  }
  return (
    <main className='flex justify-center gap-5'>
      <img
        src={img}
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
