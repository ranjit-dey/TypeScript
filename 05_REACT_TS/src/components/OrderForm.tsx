import { useState } from 'react'

interface OrderFormProps {
    onSubmit(order: { name: string; cups: number }): void
}

const OrderForm = ({ onSubmit }: OrderFormProps) => {
    const [name, setName] = useState<string>('masala')
    const [cups, setCups] = useState<number>(1)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit({ name, cups })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="name">
                <label htmlFor="chaiName">Chai type</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setName(e.target.value)
                    }}
                />
            </div>
            <div className="cup">
                <label htmlFor="chaiName">Cup</label>
                <input
                    type="number"
                    value={cups}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setCups(Number(e.target.value))
                    }}
                />
            </div>
            <button type="submit">Place Order</button>
        </form>
    )
}

export default OrderForm
