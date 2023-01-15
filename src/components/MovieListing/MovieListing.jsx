import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import {useDispatch} from 'react-redux'
import { addcart } from "../../features/movies/addToFavourites";
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  console.log(movies,'movies')
  const shows = useSelector(getAllShows);
  const dispatch=useDispatch()
  function handleadd(item){
    dispatch(addcart(item
    ))}
  let renderMovies,
    renderShows = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie}>
           <button className="button" onClick={()=>handleadd(movie)}>Add To Favourites</button>
        </MovieCard>
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie}>
       <button className="button" onClick={()=>handleadd(movie)}>Add To Favourites</button>
      </MovieCard>)
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
