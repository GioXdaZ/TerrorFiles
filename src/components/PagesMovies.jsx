import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

const API_IMG = "https://image.tmdb.org/t/p/w500";
const API_KEY = "1a2644403297434cb2dc83599303398d";

export const PagesMovies = () => {
  const { id } = useParams();
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&query`;

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data);
      });
  }, []);

  const { original_title, poster_path, release_date, overview } = movieData;

  return (
    <div className="flex flex-col">
      <div className="bg-base-300 shadow-xl flex flex-row justify-center items-center">
        <img src={API_IMG + poster_path} className="poster-image rounded-2xl" />
        <div className="items-center text-justify">
          <h1 className=" font-bold text-2xl">{original_title}</h1>
          <p>{release_date}</p>
          <p className=" py-2 px-8">{overview}</p>
        </div>
      </div>
    </div>
  );
};
