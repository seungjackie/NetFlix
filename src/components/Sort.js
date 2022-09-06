import React, {useState , useEffect}from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { Badge } from 'react-bootstrap'
import styled from "styled-components";




const MainSortLayOut = styled.div`
  width: 500px ;
  flex-wrap: wrap;
  margin-top: 200px;
  /* margin-left: 100px; */
  padding: 50px;
`

const Sort = () => {

  const { popularMovies, genreList ,loading } = useSelector(state => state.movie)
  const { sortpop, setSortpop} = useState(popularMovies.results);
  const [ movieArray, setMoiveArray] = useState(popularMovies.results)
  const dispatch = useDispatch()


  // 바뀐 값을 조정 하자

  // sort 한번 숫자별로 정열하기

  let sortarray = [];
  {
    popularMovies.results.map((item) => {
      return sortarray.push(item.popularity)
    })
  }
  console.log()

  let sortArray2 = [];
  {
    sortarray.sort((a,b) => b-a).map((item) => {
      sortArray2.push(popularMovies.results.find(item => item.popularity == item))
    })
  }


  // console.log(sortarray)
  // console.log(sortarray.sort((a,b) => b-a))
  console.log("sort" , movieArray)


  const SortArrayPop = () => {
    console.log("pop")
    dispatch({tyoe : "SORT_DATA"})
    setMoiveArray(sortpop.sort((a,b) => b-a))
  }

  useEffect(() => {

  })


  return (
    <div >
      <MainSortLayOut>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Sort 
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" onClick={() => SortArrayPop()}>Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>

        <div className='genre_item_layout'> 
          {
            genreList.map((item) => {
              return <Button size="sm" className="genre_item" >{item.name}</Button>
            })
          }
        </div> 
        </MainSortLayOut>
    </div>
  )
}

export default Sort