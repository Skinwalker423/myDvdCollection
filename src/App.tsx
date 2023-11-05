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
      setMovieList(collection);
    } else {
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

  return (
    <main className='w-full'>
      <header className='text-center my-10'>
        <h1 className='text-7xl'>My DVD Collection</h1>
      </header>
      <section className='py-10 px-16 w-full flex justify-center'>
        <input
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          className='px-4 py-2 w-full border max-w-3xl'
          type='search'
          name='search'
          id='search'
          placeholder='Find Dvd'
        />
      </section>
      <section className='pb-10'>
        <ul className='flex flex-col gap-5 justify-center w-full items-center'>
          {movieList.map((movie: Movie) => {
            return (
              <MovieCard key={movie.id} movie={movie} />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default App;
