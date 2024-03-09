import React from "react";
import { useSelector } from "react-redux";
import { selectRecommend } from "../features/movie/movieSlice";

function Dummy() {
  const movies = useSelector(selectRecommend);

  // Check if movies array exists and has elements
  const hasMovies = movies && movies.length > 0;

  return (
    <div>
      {hasMovies ? (
        <div>
          {/* Render your movies */}
          {movies.map((movie) => (
            <div key={movie.id}>{movie.title}</div>
          ))}
        </div>
      ) : (
        <div>No movies available</div>
      )}
    </div>
  );
}

export default Dummy;
