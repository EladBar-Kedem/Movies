import React from 'react';
import { useNavigate } from "react-router-dom";

const MovieCard = ({movie}) => {

    const navigate = useNavigate();
    const handleClick = function(){      
        navigate(`/movie:${movie.id}`);
    }

  return (
    <div className='cardContainer'>
      <div className='imgCardContainer'>
        <img className='imgFull' src={'https://image.tmdb.org/t/p/original/' + movie.poster_path}/>
      </div>
      <div onClick={()=>handleClick()} className='topLine'>
        <h1>{movie.title}</h1>
      </div>
    </div>
  )
}

export default MovieCard
