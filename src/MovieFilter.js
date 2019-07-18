import React from 'react';
const MovieFilter=({value='',changeName=()=>{}})=>(
    <div className="name-filter">
        <input  value={value} onChange={(event)=>changeName(event.target.value)}  className="name-filter-text" type="text" />
        <input className="name-filter-button" type="button" value="Search" />
      </div>
)
export default MovieFilter