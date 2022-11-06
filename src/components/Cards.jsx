import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

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
        <img src={API_IMG + poster_path} className="img mt-4 rounded-xl" />
      </figure>
      <div className="card-body flex flex-col justify-between items-center">
        <h1 className="card-title text-center">{original_title}</h1>
        <div className="card-actions">
          <Link
            to={`/movie/${id}`}
            id={id}
            className="btn bg-red-900 hover:bg-red-600"
          >
            Watch
          </Link>
        </div>
      </div>
    </div>
  );
};
