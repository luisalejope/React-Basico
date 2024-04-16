import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'


export const GifGrid = ({ category }) => {

    const {gifs, isLoading} = useFetchGifs(category)
    
    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                { isLoading ? <p>Loading...</p> : gifs.map( gif => (
                    <GifGridItem key={gif.id} {...gif} />
                ))}
            </div>
        </>
    )
}
/* 4hJUgNoRRsiqFKOAr3qnnLRzwwkh0dZM */
GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
