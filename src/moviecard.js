import React from'react'
import Rating from './rating'


const MovieCard=({movie={},deleteEvent})=>
 {
   const {
     title='',
     year='',
     image='https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png',
     rating=0
   }=movie
  
   return(
   <div className="movie-card">
    <div className="movie-rating"><Rating count= {rating} /></div>
    <div
      className="movie-image"
      style={{
        backgroundImage:
          `url( ${image} )`
      }}
    />
    <div className="movie-description">{title} <br/> {year}</div>
    <img className='delete'src='https://www.icone-png.com/png/19/18542.png' onClick={deleteEvent} alt=''/>
  </div>)
}
export default MovieCard