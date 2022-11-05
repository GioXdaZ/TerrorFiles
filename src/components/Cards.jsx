import React from "react";
import "../App.css";
import { PagesMovies } from "./PagesMovies";

const API_IMG = "https://image.tmdb.org/t/p/w500";

export const Cards = ({
  original_title,
  poster_path,
  release_date,
  overview,
  id,
}) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={API_IMG + poster_path} className="img rounded-b-xl" />
      </figure>
      <div className="card-body items-center text-justify">
        <h1 className="card-title">{original_title}</h1>
        <p>{overview}</p>
        <p>{release_date}</p>
        <div className="card-actions justify-end">
          <button id={id} className="btn bg-red-900 hover:bg-red-600">
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};
