import { Link, useParams } from "react-router-dom";
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
  } else if (foundMovie.id < 161) {
    location = `Last row, ${
      foundMovie.id - 120
    } going in from the left`;
  } else {
    location = "Not found";
  }
  return (
    <main className='h-screen w-full flex justify-start items-center flex-col max-sm:gap-0 gap-10 mt-5'>
      <h1 className='text-6xl text-center text-red-600 text-clip'>
        {foundMovie?.title}
      </h1>
      <div className='flex justify-center items-center max-sm:gap-0 gap-5 shadow-lg max-sm:flex-col'>
        <section className='h-full w-full flex flex-col justify-center max-sm:gap-3 gap-10 px-3'>
          <p className='text-lg'>Year: {foundMovie.year}</p>
          <p className='text-lg'>found: {location}</p>
          <Link
            to={"/"}
            className='py-2 px-4 bg-blue-500 rounded-md w-fit hover:bg-blue-400 text-white'
          >
            &#x2190; Back to All Movies
          </Link>
        </section>
        <img
          src={img}
          alt={foundMovie.title}
          width={500}
          height={500}
        />
      </div>
    </main>
  );
};

export default Movie;
