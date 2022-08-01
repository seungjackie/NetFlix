import React from 'react'

const Pagenatioins = ({popularMovies}) => {
    
  return (
    <div>
            {
        popularMovies?.results?.map((item) => (
          <div className='Pagenatioins_section' 
          style={{
            backgroundImage:
                "url(" + 
                `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` + 
                ")"
        }}>
            <div>
              {item.original_title}
            </div>
            <div>
              {item.release_date}
            </div>
            <div>
              {item.genre_ids}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Pagenatioins