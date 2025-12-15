/* ================================
   BASIC INTERFACE WITH OPTIONAL PROPERTY
================================ */

// Defines the structure of a Chai object
interface Chai {
    flavor: string // flavor name of the chai
    price: number // price in rupees
    milk?: boolean // optional: whether milk is added
}

// Object following the Chai interface
const masalaChai: Chai = {
    flavor: 'masala',
    price: 52,
}

/* ================================
   READONLY PROPERTY IN INTERFACE
================================ */

// Shop structure with readonly id
interface Shop {
    readonly id: number // id cannot be modified after creation
    name: string
}

const shop: Shop = {
    id: 1,
    name: 'B.Tech chaiwala',
}

// shop.id = 5 ❌ Error: Cannot assign to 'id' because it is read-only

/* ================================
   FUNCTION TYPE INTERFACE
================================ */

// Interface describing a function signature
interface DiscountCalculator {
    (price: number): number
}

// Function that applies 50% discount
const applyHalfDiscount: DiscountCalculator = (price) => {
    return price * 0.5
}

/* ================================
   INTERFACE WITH METHODS (OBJECT SHAPE)
================================ */

// Describes a machine that can start and stop
interface TeaMachine {
    start(chaiFlavor: string, price: number): void
    stop(): void
}

// Object implementing the TeaMachine interface
const teaMachine: TeaMachine = {
    start(chaiFlavor: string, price: number): void {
        console.log(`${chaiFlavor} chai is making... Price: ₹${price}`)
    },
    stop(): void {
        console.log('Machine is going to stop')
    },
}

// Using the machine
teaMachine.start('Milk', 52)

/* ================================
   INDEX SIGNATURE INTERFACE
================================ */

// Allows dynamic keys with number values
interface ChaiRatings {
    [flavor: string]: number
}

// Ratings for different chai flavors
const chaiRatings: ChaiRatings = {
    masala: 4,
    ginger: 4.5,
    garlic: 4.7,
}

/* ================================
   INTERFACE MERGING
================================ */

// First declaration
interface User {
    name: string
}

// Second declaration (merged automatically)
interface User {
    age: number
}

// Final User interface contains both name & age
const user: User = {
    name: 'Ranjit',
    age: 22,
}

/* ================================
   INTERFACE EXTENDING MULTIPLE INTERFACES
================================ */

// Base interfaces
interface A {
    a: string
}

interface B {
    b: string
}

// Interface C inherits properties of A and B
interface C extends A, B {
    c: string
}

// Object implementing interface C
const locationCodes: C = {
    a: 'africa',
    b: 'belgium',
    c: 'california',
}
