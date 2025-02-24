export function ListOfMovies ({ movies }) {
    return (
     <ul className="movies">
       {
         movies.map(movie => (
           <li className='movie' key={movie.id}>
             <h3>{movie.title}</h3>
             <p>{movie.year}</p>
             <img src={movie.poster} alt={movie.poster} />
           </li>
         )
         )
       }
       <li className='movie'></li>
     </ul>
    )  
}

export function NoMoviesResult () {
    <p>No se encontraron peliculas para esa búsqueda</p>
}

export function Movies ({ movies }) {
    const hasMovies =movies?.length > 0

    return (
      <>
      {
        hasMovies
        ? ListOfMovies({movies})
        : NoMoviesResult()
      }
      </>
    )
}