import React from "react";
import { getAllcarditems,deletecart } from "../../features/movies/addToFavourites";
import { useSelector,useDispatch } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./Fav.scss";
const Fav= () => {
  const carditems = useSelector(getAllcarditems);
  console.log(carditems,'addcart')
  const dispatch=useDispatch()
  function handledelete(imdbID){
    console.log(imdbID)
    dispatch(deletecart(imdbID
    ))}
   return (
    <div className="movie-list">
    {carditems.value.length===0  && <h2>Card is Empty......</h2>}
    <div className="movie-container">
    {
        carditems.value.map((items,index)=>
        <MovieCard data={items} key={index}>
        <button className="button" onClick={()=>handledelete(items.imdbID)}>DELETE</button>
        </MovieCard>
        )
    }
    </div>
    </div>
  );
};
export default Fav;
