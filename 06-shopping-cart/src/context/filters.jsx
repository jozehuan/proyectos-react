/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

// Crear el contexto
export const FiltersContext = createContext()

// Crear el Provider del contexto, que envuelva la app
export function FiltersProvider ({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })
    
    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}
