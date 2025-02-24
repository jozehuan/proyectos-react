import { useState, useEffect, useRef } from "react"

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if(isFirstInput.current){
        isFirstInput.current = search === ''
        return
    }

    if(search === '') {
      setError('No se puede buscar una pelicula vacía')
      return
    }

    if(search.match(/^\d+$/)) {
      setError('No se puede hacer búsqueda con números')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error}
}