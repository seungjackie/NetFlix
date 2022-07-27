import React from 'react'
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import MovieTrailer from "./MovieTrailer"
import {useDispatch , useSelector} from 'react-redux';




const MovieDetailCard_Main = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 20px ;
  margin-left: 100px ;
  margin-right: 100px ;
`


const MovieDetailCard = ({movie}) => {

  const {  movieTrailerList } = useSelector(state => state.movie)

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
        <div>
          {
            // 삼항 연산자 
            movie.data && 
            movie.data.genres.map((item, index)=> <Button variant="danger" className='MovieDetailCard_Button' key={index}>{item.name}</Button>)
          }
        </div>
          <div className='movie-card-title'>{movie.data?.original_title}</div>
          <div>{movie.data?.popularity}</div>
          <div className='movie-card-overview'>{movie.data?.overview}</div>
          <div>
          <Button variant="danger" className='' >
            budget
          </Button>
          {movie.data?.budget}</div>
          <div>{movie.data?.release_date}</div>
          <div>
            <MovieTrailer  trailer={movieTrailerList}/>
          </div>
        </div>
      </div>
      {/* <div>
        {
          movie === ''
          ? false
          :<p> {movie.data.genres}</p>
        }
      </div> */}

    </MovieDetailCard_Main>
  )
}

export default MovieDetailCard