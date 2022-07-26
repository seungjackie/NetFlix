import React from 'react'


const MovieDetailCard = ({movie}) => {
  // console.log("movie~~!@~!@ASDFADS",movie)
  // console.log("data path : " , movie.data.poster_path)
  // console.log("data path : " , movie.data.original_title)
  return (
    <div>
      {
        movie.data ?
        <div className='card'
        style={{
            backgroundImage:
                "url(" + 
                `https://my-json-server.typicode.com/seungjackie/NetFlix/w300_and_h450_bestv2${movie.data.poster_path}` + 
                ")"
        }} />
        :null
      }
      <div>
        <div>
          {movie.data?.original_title}
          {
            // 삼항 연산자 
            movie.data && 
            movie.data.genres.map((item, index)=> <div key={index}>{item.name}</div>)
          }
          <div>{movie.data?.popularity}</div>
          <div>{movie.data?.overview}</div>
          <div>{movie.data?.budget}</div>
          <div>{movie.data?.release_date}</div>
        </div>


      </div>
      {/* <div>
        {
          movie === ''
          ? false
          :<p> {movie.data.genres}</p>
        }
      </div> */}

    </div>
  )
}

export default MovieDetailCard