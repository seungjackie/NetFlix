import React, { useState, useCallback, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Posts from './Posts';
import Pagination from './PageTest'
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import { faStar, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




// import Pagination from "react-js-pagination";



const Pagenatioins = () => {

  const navigate = useNavigate()


  const { popularMovies, upComingMovies,genreList ,loading } = useSelector(state => state.movie)
  // const { sortpop, setSortpop} = useState(popularMovies.results);
  const [ movieArray, setMoiveArray] = useState(upComingMovies.results)
  const [ genreFilter, setGenreFiter] = useState()

  const [genreId, setGenreId] = useState()
  let genreArray = []
  {
    popularMovies.results.map((item) => {
      for(let i=0; i < item.genre_ids.length; i++){

        if(item.genre_ids[i] == genreId)
        return genreArray.push(item)
      }
    })
  }

  const genreSearch = (id) => {
    setMoiveArray(genreArray)
    // setVariant('dark')
    // setVariant('dark')
  }

  const genreClick = (id) => {
    //console.log(id)
    setGenreId(id)
  }

  const dispatch = useDispatch()
  

  // console.log(sortarray)
  // console.log(sortarray.sort((a,b) => b-a))
  // console.log("sort" , movieArray)

  // let sortNumber = []
  // {
  //   upComingMovies.results.map((item) => {
  //     return sortNumber.push(item.popularity)
  //   })
  // }
  
  // sortNumber.sort((a, b) => b - a);

  // let sortArray = []
  // {
  //   sortNumber.map((num) => {
  //     sortArray.push(popularMovies.results.find(item => item.popularity == num))
  //   }) 
  // }


  const SortArrayPop = () => {
    console.log("pop")
    setMoiveArray(movieArray.map((num) => {
      num.find((item) => item.popularity === num)
    }))
  }


  // console.log("숫자" , popularMovies?.results?.length)

  const [posts, setPosts] = useState(upComingMovies.results);
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const goToMovieDetail = (item) => {
    console.log("hi")
    console.log("hi",item.adult)
    console.log("hi",item.id)
    // console.loog([item].id)
    navigate(`/movie/${item.id}`)
    
  }


  useEffect(() => {
    if(movieArray) {
      console.log("있다")
    }else {
      console.log("없다")
    }
    // setMoiveArray()
  },[movieArray ])


  if(loading) {
    return <ClipLoader color="#ffff" loading={loading}  size={150} />
  }
    
  return (
    <div className="Movie_page_layout">

    <div className="Movie_secion1" >
        {/* <Sort /> */}
      <MainSortLayOut>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Sort 
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" onClick={() => SortArrayPop()}>인기도 순</Dropdown.Item>
            {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
        </Dropdown.Menu>
        </Dropdown>

        <Button variant='danger' className="genreSearchButton" onClick={()=>genreSearch()}>GenreSearch</Button>

        <div className='genre_item_layout'> 
          {
            genreList.map((item) => {
              return <Button size="sm" className="genre_item" onClick={() => genreClick(item.id)} >{item.name}</Button>
            })
          }
        </div> 
      </MainSortLayOut>
      </div>


      <div className="Movie_secion2">

      <div className="Page_layout">
      {
        // popularMovies?.results?.map((item, index) => (
          movieArray?.slice(offset, offset + limit).map((item, index) => (
        <div className='Pagenatioins_section' 
          key = {index}
          onClick={() => goToMovieDetail(item)}
          style={{
            backgroundImage:
                "url(" + 
                `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` + 
                ")"
        }}>
            <div className='Movies_card_title'>
              {item.original_title}
            </div>
            <div className='Movies_card_section2'>
              {item.release_date}
            </div>
            <div className='Movies_card_section1'>
              {item.genre_ids.map((id, index) => (
                    // 어레이 함수 찾는걸 도와준다, filter를 배열을 배출
                    <Badge bg="danger" key={index} className="Movies_card_section1_genre">{genreList.find(item => item.id == id ).name}</Badge>
                ))}        
            </div>

            <div className='Movies_card_section2'>
            <FontAwesomeIcon icon={faUserGroup}/> : {item.popularity}
            </div>
            <div className='Movies_card_section2'>
            <FontAwesomeIcon icon={faStar}/> : {item.vote_average}
            </div>
          </div>
        ))
      }
      </div>

        <Pagination
          total={
            posts.length === undefined ?
              1
            : posts.length
          }
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>

    </div>
  )
}



const MainSortLayOut = styled.div`
  width: 500px ;
  flex-wrap: wrap;
  margin-top: 200px;
  /* margin-left: 100px; */
  padding: 50px;
`

export default Pagenatioins







  // console.log(state)

  // const pagenationHTML = ``

  // console.log("movie" , popularMovies.results.length)


  // const page = 1
  // const pageGroup = Math.ceil(page / 5);
  // let last = pageGroup * 5;

  // if (last > popularMovies.length) {
  //   last = popularMovies.length;
  // }

  // let first = last - 4 <= 0 ? 1 : last - 4;

  // if (first >= 6) {
  //   pagenationHTML = `
  // <li class="page-item">
  //   <a class="page-link" href="#" aria-label="Previous" onclick="movoToPage(1)" >
  //     &laquo;</span>
  //   </a>
  // </li>
  // <li class="page-item">
  //   <a class="page-link" href="#" aria-label="Previous" onclick="movoToPage(${
  //     page - 1
  //   })">
  //     <span aria-hidden="true">&lt;</span>
  //   </a>
  // </li>`;
  // }