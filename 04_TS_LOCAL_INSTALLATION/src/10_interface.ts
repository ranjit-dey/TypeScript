interface Chai {
    flavor: string
    price: number
    milk?: boolean
}

const masalaChai: Chai = {
    flavor: 'masala',
    price: 52,
}

interface Shop {
    readonly id: number
    name: string
}

const s: Shop = { id: 1, name: 'B.Tech chaiwala' }
// s.id = 5 // error

interface DiscountCalculator {
    (price: number): number
}

const apply50: DiscountCalculator = (p) => p * 0.5

interface TeaMachine {
    start(chaiFlavor: string, price: number): void
    stop(): void
}

const machine: TeaMachine = {
    start: (chaiFlavor: string, price: number): void => {
        console.log(`${chaiFlavor} chai is making... Price: ₹${price}`)
    },
    stop() {
        console.log('machine is going to stop')
    },
}

machine.start('Milk', 52)

interface chaiRatings {
    [flavor: string]: number
}

const ratings: chaiRatings = {
    masala: 4,
    ginger: 4.5,
    garlic: 4.7,
}

interface User {
    name: string
}

interface User {
    age: number
}

const u: User = {
    name: 'Ranjit',
    age: 22,
}

interface A {
    a: string
}
interface B {
    b: string
}

interface C extends A, B {
    c: string
}

const alpha: C = {
    a: 'africa',
    b: 'belzium',
    c: 'california',
}
