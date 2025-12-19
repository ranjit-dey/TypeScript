import type { Chai } from '../types/types'
import ChaiCard from './ChaiCard'

interface ChaiListProps {
    items: Chai[]
}

const ChaiList = ({ items }: ChaiListProps) => {
    return (
        <div>
            {items.map((item) => (
                <ChaiCard
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    isSpecial={item.price > 30}
                />
            ))}
        </div>
    )
}

export default ChaiList
