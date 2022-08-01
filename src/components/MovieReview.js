import React from 'react'

const MovieReview = ({reviewList}) => {
    console.log("리뷰 작성자들 " , reviewList.data && reviewList.data.results)
    console.log("리뷰" , reviewList)
  return (
    <div className='MovieReview'>
      <h1>Movie Review</h1>
      <div className='MovieReview_review_section'>
        {
            reviewList.data && reviewList.data.results.map((item,index) => <div key={index} className="MovieReview_content"><h1>{item.author}</h1> <br/> {item.content}</div>)
        }
      </div>
    </div>
  )
}

export default MovieReview