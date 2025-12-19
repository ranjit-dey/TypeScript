interface ChaiCard {
    name: string
    price: number
    isSpecial?: boolean
}

const ChaiCard = ({ name, price, isSpecial = false }: ChaiCard) => {
    return (
        <div className="card">
            <h2 className="heading">
                {name} {isSpecial && <span>⭐</span>}
            </h2>
            <span className="price">{price} </span>
        </div>
    )
}

export default ChaiCard
