import React from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500";

export const PagesMovies = ({
  original_title,
  poster_path,
  release_date,
  overview,
  // id,
}) => {
  return (
    <div>
      <img src={API_IMG + poster_path} />
      <h1>{original_title}</h1>
      <p>{release_date}</p>
      <p>{overview}</p>
    </div>
  );
};
