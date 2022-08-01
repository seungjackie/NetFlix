import React from 'react'
import { Container ,Row, Col } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Recommandations = (relatedmovie) => {
    // console.log("het ", relatedmovie)
    // console.log("heasdft ", relatedmovie.relatedmovie)
    // console.log("heasdft ", relatedmovie.relatedmovie.data)
    // console.log("hi ", relatedmovie.relatedmovie.data && relatedmovie.relatedmovie.data.results)
  return (
    <div>
        {/* <div className="recommandation_img"> */}
        <Container >
            <Row >
            {
                relatedmovie.relatedmovie  === '' ? 
                null
                :relatedmovie.relatedmovie.data.results.map((item,index) => {
                    return <Col lg={4} key={index} xs={5} className="reccomand">
                                <span className='card'
                                    style={{
                                        backgroundImage:
                                            "url(" + 
                                            `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` + 
                                            ")"
                                    }} />
                        <p>{item.original_title}</p>
                    </Col>
                })
            }
        {/* </div> */}
        </Row>
    </Container>

        <Container>
        <Row>
          {/* {
            related.map((num, index)=>{
              return <Col lg={4} key={index} className="relatedMovies" onClick={()=>showDetail(num.id)} path>
              <div className='card'
              style={{backgroundImage :"url("+`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${num.backdrop_path}`+")"}}>
                <div className='overlay'>
                  <h3>{num.title}</h3>
                  <div>
                      <span><FontAwesomeIcon icon={faStar}/> : {num.vote_average} / </span>
                      <span style={{color : 'red', fontWeight : "bold", fontStyle: 'italic'}}>{num.adult ? "청불" : "Under18" }</span>
                  </div>
                </div>
              </div>
              </Col>
            })
          } */}
        </Row>
      </Container> 
    </div>
  )
}

export default Recommandations