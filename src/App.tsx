import "./App.css";
import { collection } from "../data/collection.ts";
import { Movie } from "../types/index.ts";
import MovieCard from "./components/MovieCard.tsx";

function App() {
  console.log("collection", collection);
  return (
    <main>
      <header>My DVD Collection</header>
      <section>
        <ul className='flex flex-wrap gap-5 justify-center py-5'>
          {collection.map((movie: Movie) => {
            return (
              <li className=''>
                <MovieCard key={movie.id} movie={movie} />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default App;
