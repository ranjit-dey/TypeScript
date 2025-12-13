/* =======================
   ARRAYS IN TYPESCRIPT
   ======================= */

// Array of strings → list of chai flavours
const chaiFlavours: string[] = ['masala', 'ginger']
console.log(chaiFlavours)

// Array of numbers → price list
const chaiPrices: number[] = [20, 25]
console.log(chaiPrices)

// Generic array syntax (Array<T>) → commonly used in libraries
const ratings: Array<number> = [4.2, 4]
console.log(ratings)

/* =======================
   OBJECT TYPES WITH ARRAYS
   ======================= */

// Type for chai item
type Chai = {
    name: string
    price: number
}

// Type for food item (same structure, different meaning)
type Food = {
    name: string
    price: number
}

// Array of objects using custom type
const chaiVariants: Chai[] = [
    { name: 'masala', price: 52 },
    { name: 'ginger', price: 40 },
]

// Generic array syntax with object type
const menuItems: Array<Food> = [
    { name: 'alu biriyani', price: 60 },
    { name: 'egg roll', price: 40 },
]

/* =======================
   READONLY ARRAYS
   ======================= */

// readonly array → cannot modify (push/pop not allowed)
const cities: readonly string[] = ['Delhi', 'Kolkata', 'Mumbai']
// cities.push('Pune') ❌ Error: readonly array

/* =======================
   MULTI-DIMENSIONAL ARRAYS
   ======================= */

// 2D array → useful for tables, matrices, grids
const numberTable: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
]

/* =======================
   TUPLES IN TYPESCRIPT
   ======================= */

// Tuple → fixed length + fixed order
let chaiTuple: [string, number]
chaiTuple = ['masala chai', 52]

// Order matters
// chaiTuple = [23, "hello"] ❌ Error

// Tuple with optional element
let userInfo: [username: string, age: number, isActive?: boolean]
userInfo = ['ranjitdey', 21]
userInfo = ['rantu', 12, true]

// Readonly tuple → commonly used for coordinates
const geoLocation: readonly [number, number] = [25.236525, 56.521436]

// Named tuple → improves readability
let chaiItem: [name: string, price: number]
chaiItem = ['masala chai', 52]

/* =======================
   ENUMS IN TYPESCRIPT
   ======================= */

// Numeric enum (auto-incremented)
enum CupSize {
    SMALL, // 0
    MEDIUM, // 1
    LARGE, // 2
}

const selectedSize = CupSize.SMALL

// Enum with custom numeric start value
enum OrderStatus {
    PENDING = 100,
    SERVED, // 101
    CANCELED, // 102
}

// String enum → safer & readable
enum ChaiType {
    MASALA = 'masala',
    GINGER = 'ginger',
}

// Using enum as function parameter (very safe)
function makeChai(type: ChaiType): void {
    console.log(`Making ${type} chai...`)
}

makeChai(ChaiType.GINGER)

/* =======================
   ENUM BAD PRACTICE
   ======================= */

// ❌ Heterogeneous enum (number + string)
// Avoid this in real projects
enum Student {
    ID = 165,
    NAME = 'Ranjit',
}

/* =======================
   CONST ENUM
   ======================= */

// const enum → removed at compile time (performance benefit)
const enum SugarLevel {
    LOW = 1,
    MEDIUM = 3,
    HIGH = 5,
}

const sugarPreference = SugarLevel.HIGH

/* =======================
   TUPLE PITFALL
   ======================= */

// Tuple allows push() even though it breaks meaning
let studentInfo: [name: string, id: number] = ['rabindra', 25]

// studentInfo.push('bug') ❌ Logical bug (TypeScript allows it)
// This is why tuples should be used carefully
