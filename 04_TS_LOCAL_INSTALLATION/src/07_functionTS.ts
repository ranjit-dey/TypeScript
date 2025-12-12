function makeChai(type: string, cups: number) {
    console.log(`Making ${cups} cups of ${type}`)
}

makeChai('Masala chai', 5)

function getChaiPrice(): number {
    return 25
}

function makeOrder(order: string) {
    if (!order) return null
    return order
}

function locChai(): void {
    console.log('Chai is ready')
}

// type is optional
// function orderChai(type?:string){}

// type default value is masala
function orderChai(type: string = 'masala') {}

function createChai(order: { type: string; sugar: number; size: 'small' | 'large' }): number {
    return 5
}
