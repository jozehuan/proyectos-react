import './App.css'

import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { Movies } from './components/Movies'
import { useState, useCallback } from 'react'

import debounce from 'just-debounce-it' //npm install just-debounce-it -E

function App() {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const debounceGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300)
  , [getMovies])

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debounceGetMovies(newSearch) // Permite hacer la búsqueda mientras se escribe
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='search' placeholder='Avengers, Star Wars, The Matrix,...' />
          <p>Ordenar</p>
          <input type='checkbox' onChange={handleSort} checked={sort}/>
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color : 'red'}} className='error'>{error}</p>}
      </header>

      <main>
        {loading ? <>Cargando...</> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
