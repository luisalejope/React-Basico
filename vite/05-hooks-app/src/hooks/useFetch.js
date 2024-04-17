import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })

    useEffect(() => {
        getFetch()
    }, [url])

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }


    const getFetch = async()=> {

        setLoadingState();
        
        const response = await fetch(url);

        if (!response.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: response.statusText
                }
            })
        }
        
        const data = await response.json()

        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })
        console.log(data)
    }
    


    return{
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}
