import { useEffect, useState } from "react";
import "./App.css";
import { Carousel } from "./components/Carousel";
import { Cards } from "./components/Cards";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

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
    <div>
      <Navbar />

      <Carousel />

      <div className="middle-body">
        {movies.map((movieReq) => (
          <Cards key={movieReq.id} {...movieReq} />
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
