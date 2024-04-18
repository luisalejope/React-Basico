import { useLayoutEffect, useRef, useState } from "react";
import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";


export const Layout = () => {
    const { counter, decrease, increase } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(
        `https://pokeapi.co/api/v2/pokemon/${counter}`
    );

    const refCard = useRef()
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })
    
    
    useLayoutEffect(() => {
        const { height, width } =  refCard.current.getBoundingClientRect();
        setBoxSize({ height, width });
    }, [])

    return (
        <>
            {isLoading ? 
                <LoadingMessage />
                : (
                    <PokemonCard
                        id={counter} 
                        name={data.name} 
                        sprites={[
                            data.sprites.front_default,
                            data.sprites.front_shiny,
                            data.sprites.back_default,
                            data.sprites.back_shiny,
                        ]} 
                    />
                )
            }
            
            <h3>{data?.name}</h3>
            {hasError && <p>ERROOOOOR</p>}

            <button
                className="btn btn-primary mt-2"
                onClick={() => (counter > 1 ? decrease() : null)}
            >
                Anterior
            </button>
            <button className="btn btn-primary mt-2" onClick={() => increase()}>
                Siguiente
            </button>

            <code>
                {JSON.stringify(boxSize)}
            </code>

            <pre ref={refCard}>
                {JSON.stringify(data, null, 2)}
            </pre>
        </>
    );
};
