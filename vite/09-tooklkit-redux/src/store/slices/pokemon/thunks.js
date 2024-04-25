import { setPokemons, startLoadingPokemons } from "./pokemonSlice"
import { pokemonApi } from "../../../Api"


export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons())
        const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${page}`);
        const payload = {
            pokemons: data.results,
            page: page + 1
        }
        dispatch(setPokemons(payload))
    }
}