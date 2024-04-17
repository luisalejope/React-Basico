import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHook = () => {

    const {data, hasError, isLoading} = useFetch('https://pokeapi.co/api/v2/pokemon/1');

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {/* <pre>
                {JSON.stringify(data, null, 2)}
            </pre> */}
            <h3>{data?.name}</h3>
            {hasError&& <p>ERROOOOOR</p>}
        </>
    )
}
