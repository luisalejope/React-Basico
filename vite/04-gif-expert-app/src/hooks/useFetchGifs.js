import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
    
    const [gifs, setGifs] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const requestGifs = async() => {
        try {
            setIsLoading(true)
            const res = await getGifs(category)
            setGifs(res)
            console.log(res)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        requestGifs()
    }, [category])
    

    return {
        gifs,
        isLoading
    }
}
