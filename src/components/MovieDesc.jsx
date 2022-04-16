import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const MovieDesc = () => {
    const [movie,setMovie] = useState();
    const navigate = useNavigate();
    const { id } = useParams();
    const getMovieData = async function(){
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id.substring(1)}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`); 
            setMovie(res.data)
        } catch (err) {
            console.log(err);
        }  
    }

    useEffect(()=>{
        getMovieData();   
    },[getMovieData])
  return (movie &&
    <div className='descContainer'>
      <div className='description'>
        <h1>{movie.original_title}</h1>
        <p>{movie.overview}</p>
        <h2>Release Date: {movie.release_date}</h2>
        <button onClick={()=> navigate(`/`)}>Back</button>
      </div>
      <div className='imgDesc'>
        <img className='descImage' src={'https://image.tmdb.org/t/p/original/' + movie.poster_path}/>
      </div>
    </div>
  )
}

export default MovieDesc
