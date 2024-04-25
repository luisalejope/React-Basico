import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {
    const {page, pokemons, isLoading} = useSelector(state => state.pokemons)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, [])

    const onNextPage = () => {
        dispatch(getPokemons(page))
    }

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            <span>Loading: {JSON.stringify(isLoading) }</span>

            <ul style={{display: !isLoading? 'block' : 'none'}}>
                {
                    pokemons.map(pokemon => (
                        <li key={pokemon.name}>{pokemon.name}</li>
                    ))
                }
            </ul>

            <p>page: {page}</p>
            <button disabled={isLoading} onClick={onNextPage}>Next page</button>
        </>
    )
}

PokemonApp.propTypes = {}

export default PokemonApp