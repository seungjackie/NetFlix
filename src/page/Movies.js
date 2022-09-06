import React,{ useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { movieAction } from '../redux/actions/MovieAction';
import MovieCard from '../components/MovieCard'
import MovieSlide from '../components/MovieSlide'
import Sort from '../components/Sort';
import Pagenations from '../components/Pagenatioins'

const Movie = () => {

  const dispatch = useDispatch()
  const {popularMovies ,genreList,loading} = useSelector(state => state.movie)

  console.log("popularMovies", popularMovies.results)

  // console.log("popularMovies local 2@@@", popularMovies)

  useEffect(() =>{
    dispatch(movieAction.getMovies());
  },[])

  return (
    <div className="Movie_page_layout">
      <div className="Movie_secion1" >
        {/* <Sort /> */}
      </div>
      <div className="Movie_secion2">
        <Pagenations popularMovies={popularMovies}/>
      </div>
    </div>
  )
}

export default Movie