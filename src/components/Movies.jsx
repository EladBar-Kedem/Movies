import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux'
import Footer from './Footer';



const Movies = () => {

    const [movies,setMovies ] = useState([]);
    const page = useSelector((state) => state.page.value)

    const getMovies = async function(){
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`);
            setMovies(res.data.results)
        } catch (err) {
            console.log(err.message);
        }

    }

    useEffect(()=>{
        getMovies();
    },[page])

  return (
      <div className='moviesAndFooter'>
        <div className='moviesContainer'>
        {movies.map((movie, index) => <MovieCard key = {index} movie = {movie}/>)}
        </div>
        <Footer/>
      </div>
    
  )
}

export default Movies
