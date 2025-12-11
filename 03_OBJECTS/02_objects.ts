/************************************
 * Basic Object & Inline Type Usage
 ************************************/

// Simple chai object with inferred types
const chai = {
    name: 'Masala chai',
    price: 20,
    isHot: true,
}

// Inline type annotation (not reusable)
let tea: {
    name: string
    price: number
    isHot: boolean
}

// Assigning object that matches the inline type
tea = {
    name: 'Ginger tea',
    price: 20,
    isHot: true,
}


/************************************
 * Creating Reusable Types Using `type`
 ************************************/

type Tea = {
    name: string
    price: number
    ingredients: string[]
}

// Strongly typed object using the Tea type
const adrakChai: Tea = {
    name: 'Adrak Chai',
    price: 25,
    ingredients: ['ginger', 'tea leaves'],
}


/************************************
 * Type Compatibility & Drawbacks
 ************************************/

type Cup = { size: string }
let smallCup: Cup = { size: '200ml' }

// Here bigCup has an extra property "material"
// TypeScript allows assigning it to smallCup because of structural typing
let bigCup = { size: '550ml', material: 'steel' }

// ❗ Drawback: extra fields don't block assignment in structural typing
smallCup = bigCup   // allowed, but may cause unexpected behaviors


/************************************
 * Type Narrowing via Assignments
 ************************************/

type Brew = { brewTime: number }

// Extra fields (beans) are allowed since Brew only requires brewTime
const coffee = { brewTime: 5, beans: 'Arabica' }
const chaiBrew: Brew = coffee   // valid assignment


/************************************
 * Creating a User Type
 ************************************/

type User = {
    username: string
    password: string
}

const u: User = {
    username: 'ranjitdey',
    password: 'pass12',
}


/************************************
 * Nested Types & Complex Structures
 ************************************/

type Item = { name: string; quantity: number }
type Address = { street: string; pin: number }

// Order type containing nested arrays & objects
type Order = {
    id: string
    items: Item[]
    address: Address
}


/************************************
 * Utility Types: Partial<T>
 ************************************/

type Chai = {
    name: string
    price: number
    isHot: boolean
}

// Partial<Chai> = all properties become optional
const updateChai = (updates: Partial<Chai>) => {
    console.log('Updating chai with', updates)
}

// All valid → because Partial makes fields optional
updateChai({ price: 50 })
updateChai({ isHot: false })
updateChai({}) // empty update still valid


/************************************
 * Utility Types: Required<T>
 ************************************/

type ChaiOrder = {
    name?: string      // optional
    quantity?: number  // optional
}

// Required<ChaiOrder> converts ALL optional → required
const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order)
}

// Must include BOTH properties (name & quantity)
placeOrder({
    name: 'Ginger Chai',
    quantity: 5,
})


/************************************
 * Utility Types: Pick<T, K>
 ************************************/

type Coffee = {
    name: string
    price: number
    isHot: boolean
    ingredients: string[]
}

// Pick selects specific fields from another type
type BasicCoffeeInfo = Pick<Chai, 'name' | 'price'>

const coffeeInfo: BasicCoffeeInfo = {
    name: 'Capatuino',
    price: 50,
}


/************************************
 * Utility Types: Omit<T, K>
 ************************************/

type ChaiNew = {
    name: string
    price: number
    isHot: boolean
    secretIngredients: string[]
}

// Omit removes specific fields (used for hiding secrets)
type PublicChai = Omit<ChaiNew, 'secretIngredients'>

const NewChaiInfo: PublicChai = {
    name: 'Garlic tea',
    price: 10,
    isHot: false,
}
