export type Movie = {
  id: number;
  title: string;
  image: string;
  year: number;
};

export interface MovieProps {
  movie: Movie;
}
