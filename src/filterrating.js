import React from 'react';
import  Rating from './rating'
const FilterRating=({count,change})=>(
    <div className="rating-filter">
        <span className="rating-filter-text">Minimum rating</span>
        <Rating count= {count} change={(rating)=>change(rating)} />
      </div>
)
export default FilterRating