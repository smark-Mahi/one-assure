import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import {useDispatch} from 'react-redux'
import { addcart } from "../../features/movies/addToFavourites";
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer,toast} from 'react-toastify'
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  console.log(movies,'movies')
  const shows = useSelector(getAllShows);
  const dispatch=useDispatch()
  function handleadd(item){
    dispatch(addcart(item
    ))
    toast.success('Added successfully',{position:'top-center'})
  }
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
        {movies.Search?.length===0  && <h1 style={{textAlign:'center'}}>Not Found...</h1>}
        <div className="movie-container">{renderMovies}
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        {shows.Search?.length===0  && <h1 style={{textAlign:'center'}}>Not Found...</h1>}
        <div className="movie-container">{renderShows}</div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default MovieListing;
