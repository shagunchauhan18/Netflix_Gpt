import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    
  return (
    movies&&(
       <div className="p-6 ">
        <h1 className="text-3xl py-2 text-white">{title}</h1>
    <div className="flex overflow-x-auto ">
        
        <div className="flex ">
       {     movies.map((movie)=>(
                <MovieCard key={movie?.id} posterpath={movie?.poster_path}/>

            ))
        }
       

        </div>
     

    </div>
    </div>
    )
  )
}

export default MovieList
