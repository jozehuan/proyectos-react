import './Filters.css'
import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
    const {filters, setFilters} = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input 
                type='range'
                id={minPriceFilterId}
                min='0'
                max='1000'
                value={filters.minPrice}
                onChange={handleChangeMinPrice}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='jewelery'>Joyería</option>
                    <option value='electronics'>Electrónica</option>
                    <option value="men's clothing">Ropa Hombre</option>
                    <option value="women's clothing">Ropa Mujer</option>
                </select>
            </div>
        </section>
    )
}