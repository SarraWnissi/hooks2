import React from 'react'
import ReactStars from 'react-stars'

export default function MovieCard({movie}) {
  return (
    
    <div className='movie-card'>
      <img src={movie.image} alt="" />
<h1>{movie.title}</h1>
<p>{movie.description}</p>
<p>{movie.duration}</p>
<p>{movie.releaseDate}</p>
<ReactStars
value={movie.rate}
  count={10}
  onChange={()=>{}}
  size={24}
  edit={false}
  color2={'#ffd700'} />
 
 
<button className="watch-button">Click to Watch</button>
    </div>
  )
}
