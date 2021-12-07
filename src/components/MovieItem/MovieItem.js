import React, { useEffect, useState } from "react";
import axios from 'axios'
import './MovieItem.css'

const Movie = ({ url }) => {
  const [movie, setMovie] = useState(null);


  useEffect(() => {
    fetchMovie(url);
  }, [])

  const fetchMovie = (url) => {
      const obj = axios.get(url).then(({ data }) => {
        setMovie(data)
      })
  }

  return (<>{
    movie && (

      <div className="card">
        <div className="card-header">
          <h1>{movie.title}</h1>
        </div>
        <div className="card-body">
          <p>
            {movie.opening_crawl.slice(0, 200)}
          </p>
          <a href="#" className="btn">Watch Now</a>
        </div>
      </div>)}</>
  )
}

export default Movie