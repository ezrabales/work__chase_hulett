import "./Admin.css";
import { ThirdPartyApi } from "../../utils/ThirdPartyApi";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import genresMap from "../../utils/genresMap";

const Admin = () => {
  const [movie, setMovie] = useState(null);
  const [popParam, setPopParam] = useState(5);
  const [genres, setGenres] = useState(["drama", "drama", "darma"]);

  function lowerParams() {
    if (popParam >= 2) {
      setPopParam(popParam - 1);
    } else if (popParam >= 1) {
      setPopParam(1);
    } else {
      setPopParam(popParam - 0.1);
    }
  }

  const fetchData = async ({ page }) => {
    const data = await new ThirdPartyApi()._getMovieData({ page });
    return data;
  };

  function validateMovie(movie, array) {
    if (movie.popularity >= popParam) {
      array.push(movie);
    }
  }

  useEffect(() => {
    const tempValidMovies = [];
    let totalPages = 2;
    async function handleData() {
      for (let page = 1; page <= totalPages; page++) {
        const data = await fetchData({ page });
        totalPages = data.total_pages;
        data.results.forEach((movie) => {
          validateMovie(movie, tempValidMovies);
        });
      }
      if (tempValidMovies.length === 0) {
        lowerParams();
      } else {
        let highestPopMovie = tempValidMovies[0];
        for (let i = 0; i < tempValidMovies.length; i++) {
          if (highestPopMovie.popularity < tempValidMovies[i].popularity) {
            highestPopMovie = tempValidMovies[i];
          }
        }
        setMovie(highestPopMovie);
        console.log(highestPopMovie);
      }
    }
    handleData();
  }, [popParam]);

  // genre handler
  useEffect(() => {
    if (movie) {
      const genreIds = movie.genre_ids;
      const genres = genreIds.map((id) => {
        const genre = genresMap.find((genre) => genre.id === id);
        return genre ? genre.name : null;
      });
      setGenres(genres);
    }
  }, [movie]);

  const todaysDateUnformatted = new Date();
  const todaysDate = `${
    todaysDateUnformatted.getMonth() + 1
  }/${todaysDateUnformatted.getDate()}/${todaysDateUnformatted.getFullYear()}`;

  if (movie) {
    return (
      <div className="admin">
        <div className="motd">
          <h2 className="motd__title">Movie of the day!</h2>
          <div className="motd__todays-date">{todaysDate}</div>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`poster of movie "${movie.title}"`}
              className="motd__poster"
            />
          ) : (
            <div className="motd__no-poster">Movie has no poster</div>
          )}
          <h3 className="motd__movie-title">{movie.title}</h3>
          <div className="motd__genres">
            {genres.map((genre, index) => {
              return (
                <div key={`genre-${index}`} className="motd__genre">
                  {genre}
                </div>
              );
            })}
          </div>
          <div className="motd__movie-overview">
            {movie.overview || "Movie has no overview"}
          </div>
          <div className="motd__end" />
        </div>
      </div>
    );
  } else {
    return <Preloader />;
  }
};
export default Admin;
