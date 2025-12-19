import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState<number>(5)
    return (
        <div>
            <h2>Clicks : {count}</h2>
            <button onClick={() => setCount((prev) => prev + 1)}>Click me</button>
        </div>
    )
}

export default Counter
