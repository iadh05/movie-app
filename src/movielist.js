import React from 'react'
import MovieCard from './moviecard'
import ModalExample from './modal'


const Movielist=({movies=[],addMovie=()=>{},delevent})=>(
    <div className="movie-list">
        {movies.map((el)=><MovieCard key={el.id} movie={el} deleteEvent={()=>delevent(el.id)}/>)}
      
        <ModalExample addMovie={addMovie}/>
        
      </div>

)
export default Movielist