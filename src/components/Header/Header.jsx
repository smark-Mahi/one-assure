import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import user from "../../images/add-to-favorites.png";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import { moviessearch,showssearch } from "../../features/movies/movieSlice"
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux'
import { getAllcarditems } from "../../features/movies/addToFavourites";
const Header = () => {
  const [hover,sethover]=React.useState(false)
  const [searchh,setsearchh]=React.useState(null)
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const carditems = useSelector(getAllcarditems);
  console.log(hover)
  const dispatch=useDispatch()
  //For movies and shows-Debouncing
  React.useEffect(()=>{
    const getdata=setTimeout(()=>{
      var moviesfillterresult=movies.Search.filter(cards=>cards.Title.toLowerCase().includes(searchh.toLowerCase()) || cards.Year.includes(searchh))
      dispatch(moviessearch(moviesfillterresult))
      if(moviesfillterresult.length===0){
        let showsfillterresult=shows.Search.filter(cards=>cards.Title.toLowerCase().includes(searchh.toLowerCase()) || cards.Year.includes(searchh))
        console.log(showsfillterresult)
        dispatch(showssearch(showsfillterresult))
      }
      console.log(moviesfillterresult)
    },2000)
    return ()=>clearTimeout(getdata)
  },[searchh])
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <input placeholder="Search...." className="search" onChange={(e)=>setsearchh(e.target.value)}/>
      <div className="user-image" >
      <h5 className={hover?'display':'none'}>favourites</h5>
      <div className="count"><span>{carditems.value.length}</span></div>
      <Link to="/fav">
        <img src={user} alt="user"  onMouseOver={()=>sethover(true)} onMouseOut={()=>sethover(false)}/>
      </Link>
      </div>
    </div>
  );
};

export default Header;
