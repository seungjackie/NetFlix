import React, { useState } from 'react'
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import MovieTrailer from "./MovieTrailer"
import {useDispatch , useSelector} from 'react-redux';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MovieReview from './MovieReview';






const MovieDetailCard_Main = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px ;
  margin-left: 100px ;
  margin-right: 100px ;
`


const MovieDetailCard = ({movie}) => {

  const {  movieTrailerList } = useSelector(state => state.movie)

  const [ moreState, setMoreState] = useState(false) 
  console.log("moive", movie)
  // console.log("관객수" , movie.data?.spoken_languages.vote_average)
  // console.log("관객수" , movie.data?.vote_average)

  const LeadMore = () => {
    setMoreState(!moreState)
    console.log(moreState)
  }

  return (
    <MovieDetailCard_Main>
      <div className='movie-card-layout-left' > 
      {
        movie.data ?
        <div className='cardPoster'
        style={{
            backgroundImage:
                "url(" + 
                `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.data.poster_path}` + 
                ")"
        }} />
        :null
      }
      </div>
      <div className='movie-card-layout-right'>
        <div>
          {
            // 삼항 연산자 
            movie.data && 
            movie.data.genres.map((item, index)=> <Button variant="danger" className='MovieDetailCard_Button' key={index}>{item.name}</Button>)
          }
        </div>
        <div className='movie-card-title'>{movie.data?.original_title}</div>
        <div className='movie-tagline'>
           {movie.data?.tagline}
        </div>
        <div className='movie-card-layout-section2'>
          <span> 평점 : {movie.data?.vote_average}  </span>
          <span> 관객수 :  {movie.data?.popularity}</span>
          <span className='adult'>{movie.adult ? "청불" : "Under18" }</span>
        </div>
        <div className='movie-card-overview'>{movie.data?.overview}</div>
        <div className='movie-card-layout-section3'>
          <div>
            <Button variant="danger" className='' >
              Budget : 
            </Button>
            <span> {movie.data?.budget} </span>
          </div>
          <div>
            <Button variant="danger" className='' >
              Revenue
            </Button>
            <span> {movie.data?.budget} </span>
          </div>
          <div>
            <Button variant="danger" className='' >
              Release Day
            </Button>
            <span> {movie.data?.release_date} </span>
          </div>
          <div>
            <Button variant="danger" className='' >
              Time
            </Button>
            <span> {movie.data?.budget} </span>
          </div>
        </div>
        <div>
          <MovieTrailer  trailer={movieTrailerList}/>
        </div>
      </div>
      
      {/* <button onClick={LeadMore} >Leadmore</button> */}
      {/* { moreState === true ?
        <MovieReview />
        :null
      } */}
    </MovieDetailCard_Main>

  )
}

export default MovieDetailCard