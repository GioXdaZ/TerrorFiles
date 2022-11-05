import { useEffect, useState } from "react";
import "./App.css";
import { Carousel } from "./components/Carousel";
import { Cards } from "./components/Cards";

const ID = "8225677";
const API_KEY = "1a2644403297434cb2dc83599303398d";

const API_URL = `https://api.themoviedb.org/3/list/${ID}?api_key=${API_KEY}&query
`;

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.items);
      });
  }, []);

  return (
    <div className="body bg-slate-900">
      <div className="navbar bg-base-100 fixed z-10">
        <div className="flex-1 justify-center">
          <a className="normal-case text-xl">TerrorFiles</a>
        </div>
      </div>

      <Carousel />

      <div className="middle-body">
        {movies.map((movieReq) => (
          <Cards key={movieReq.id} {...movieReq} />
        ))}
      </div>

      <div className="footer-body text-center">Copyright by GioXdaZ© 2022</div>
    </div>
  );
};

export default App;
