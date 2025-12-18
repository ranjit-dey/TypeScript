import type { AxiosResponse } from 'axios'
import axios from 'axios'

axios.get('https://example.com/data').then((response) => {
    console.log(response.data)
})

interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}

const fetchData = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios.get(
            'https://jsonplaceholder.typicode.com/todos/1',
        )
        console.log(response.data)
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('Axios error', error.message)
            if (error.response) {
                console.log(error.response.status)
            }
        }
    }
}
