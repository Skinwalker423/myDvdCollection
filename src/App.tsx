import "./App.css";
import { collection } from "../data/collection.ts";
import { Movie } from "../types/index.ts";
import MovieCard from "./components/MovieCard.tsx";
import { useEffect, useState } from "react";

function App() {
  const [movieList, setMovieList] = useState(collection);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!value.length) {
      console.log("triggering");
      setMovieList(collection);
    }
    if (value.length > 0) {
      const filteredList = collection.filter(
        (movie: Movie) => {
          return movie.title
            .toLowerCase()
            .includes(value.toLowerCase());
        }
      );

      setMovieList(filteredList);
    }
  }, [value]);

  const handleSortByTitle = () => {
    const titleSortedList = movieList.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else return 0;
    });

    setMovieList([...titleSortedList]);
  };

  const handleSortByYear = () => {
    const yearSortedList = movieList.sort((a, b) => {
      if (a.year < b.year) {
        return -1;
      } else if (a.year > b.year) {
        return 1;
      } else return 0;
    });
    console.log({ yearSortedList });
    setMovieList([...yearSortedList]);
  };

  return (
    <main className='w-full relative'>
      <header className='w-full flex flex-col text-center pt-3 justify-center items-center gap-3 fixed bg-slate-400 z-50'>
        <h1 className='text-3xl'>My DVD Collection</h1>
        <div className='w-full relative max-w-3xl px-2'>
          <input
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
            className='px-4 py-4 w-full border border-slate-300 max-w-3xl rounded-full'
            type='search'
            name='search'
            id='search'
            placeholder='Search for a dvd'
          />
          <button
            onClick={() => setValue("")}
            className='absolute rounded-full text-white bg-red-500 py-1 px-2 right-3 top-3'
          >
            &#x2715;
          </button>
        </div>
        <div className='flex py-5 w-full justify-center gap-3 '>
          <button
            type='button'
            onClick={handleSortByYear}
            className='py-2 px-4 bg-blue-400 rounded-lg hover:bg-blue-500 text-white'
          >
            Sort by Year
          </button>
          <button
            type='button'
            onClick={handleSortByTitle}
            className='py-2 px-4 bg-green-500 rounded-lg hover:bg-green-600 text-white'
          >
            Sort by Title
          </button>
        </div>
      </header>
      <section className='pb-10 px-2 pt-60'>
        {movieList.length > 0 ? (
          <ul className='flex flex-col gap-5 justify-center w-full items-center'>
            {movieList.map((movie: Movie) => {
              return (
                <MovieCard key={movie.id} movie={movie} />
              );
            })}
          </ul>
        ) : (
          <p className='text-center'>No results</p>
        )}
      </section>
    </main>
  );
}

export default App;
