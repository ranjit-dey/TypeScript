import { useEffect, useState } from 'react'

interface FetchState<T> {
    data: T | null
    loading: boolean
    error: string | null
}

export function useFetch<T>(url: string): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null,
    })

    useEffect(() => {
        let isMounted = true // prevents state update after unmount

        const fetchData = async () => {
            setState({ data: null, loading: true, error: null })

            try {
                const response = await fetch(url)

                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`)
                }

                const data: T = await response.json()

                if (isMounted) {
                    setState({ data, loading: false, error: null })
                }
            } catch (err) {
                if (isMounted) {
                    setState({
                        data: null,
                        loading: false,
                        error: err instanceof Error ? err.message : 'Something went wrong',
                    })
                }
            }
        }

        fetchData()

        return () => {
            isMounted = false
        }
    }, [url])

    return state
}
