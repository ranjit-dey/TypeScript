import './App.css'
import Card from './components/Card'
import ChaiCard from './components/ChaiCard'
import ChaiList from './components/ChaiList'
import Counter from './components/Counter'
import OrderForm from './components/OrderForm'

import type { Chai } from './types/types'

const menu: Chai[] = [
    { id: 1, name: 'masala', price: 20 },
    { id: 2, name: 'ginger', price: 50 },
    { id: 3, name: 'milk', price: 30 },
    { id: 4, name: 'garlic', price: 35 }
]

function App() {
    return (
        <>
            <div className="cart">
                <ChaiCard name="Headphones" price={500} />
                <ChaiCard name="iPhone" price={50000} isSpecial={true} />
            </div>
            <div className="counter">
                <Counter />
            </div>
            <div className="chaiList">
                <ChaiList items={menu} />
            </div>
            <div className="orderForm">
                <OrderForm onSubmit={(order) => {console.log("Placed :",order.name, order.cups);
                }} />
            </div>
            <div className="card">
                <Card title='Hello world' />
                <Card title='Hello world' footer="I am a footer" />
            </div>
        </>
    )
}

export default App
