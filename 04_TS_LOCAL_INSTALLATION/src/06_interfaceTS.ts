/************************************************************
 * SECTION 1 — Using Inline Types vs Reusable Type Aliases
 ************************************************************/

/*
// == ONE WAY == (Inline type definitions inside function parameters)
function makeChai(order: { type: string; sugar: number; strong: boolean }) {
    console.log(order)
}

function serveChai(order: { type: string; sugar: number; strong: boolean }) {
    console.log(order)
}
*/

/************************************************************
 * A BETTER WAY — Using a reusable `type` for cleaner code.
 ************************************************************/
type ChaiOrder = {
    type: string
    sugar: number
    strong: boolean
}

// Function that receives order details and logs them
function makeChai(order: ChaiOrder) {
    console.log('Making chai:', order)
}

// Function that serves chai
function serveChai(order: ChaiOrder) {
    console.log('Serving chai:', order)
}

/************************************************************
 * SECTION 2 — Using INTERFACE instead of TYPE for objects
 * Interfaces are extendable; types are more flexible but
 * cannot be implemented by classes the same way unions can.
 ************************************************************/

interface TeaRecipe {
    water: number
    milk: number
}

// Class implementing an interface (allowed)
class MasalaChaiRecipe implements TeaRecipe {
    water = 120
    milk = 80
}

/************************************************************
 * SECTION 3 — Demonstrating interface vs type difference
 * Interfaces CAN be implemented by classes; types with
 * unions generally CANNOT.
 ************************************************************/

// ❌ Using `type` for literal unions cannot be implemented by a class
// type CupSize = 'small' | 'large'

// ✔ Using interface for object-shape implementation
interface CupSize {
    size: 'small' | 'large'
}

class TeaCup implements CupSize {
    size: 'small' | 'large' = 'small'
}

/************************************************************
 * SECTION 4 — Why some `type` definitions cannot be implemented
 ************************************************************/

// This works because the type describes a simple object shape
// type ApiResponse = { ok: boolean }
// class MyResponse implements ApiResponse {
//     ok: boolean = true
// }

// ❌ ERROR: You cannot implement a union type using a class
// type LoginStatus = { ok: true } | { ok: false }
// class UserLogin implements LoginStatus {
//     ok: boolean = false
// }

/************************************************************
 * FIX — Use interface instead of union for class implementation
 ************************************************************/
interface ApiResponse {
    ok: true | false
}

class MyResponse implements ApiResponse {
    ok: boolean = true
}

/************************************************************
 * SECTION 5 — String Literal Types
 ************************************************************/
type TeaType = 'masala' | 'ginger' | 'lemon'

function orderChai(teaType: TeaType) {
    console.log('Ordering chai type:', teaType)
}

/************************************************************
 * SECTION 6 — Using type intersections (AND operator)
 * Combine two separate types into a more detailed type.
 ************************************************************/
type BaseChai = { teaLeaves: number }
type ExtraIngredients = { masala: number }

// New type that includes BOTH BaseChai AND ExtraIngredients
type MasalaChaiCup = BaseChai & ExtraIngredients

const masalaChaiCup: MasalaChaiCup = {
    teaLeaves: 3,
    masala: 1,
}

/************************************************************
 * SECTION 7 — Optional properties in types
 ************************************************************/
type UserProfile = {
    username: string
    bio?: string // optional
}

const userA: UserProfile = { username: 'ranjit-dey' }
const userB: UserProfile = { username: 'john-doe', bio: 'hello world' }

/************************************************************
 * SECTION 8 — Readonly properties in types
 ************************************************************/
type AppConfig = {
    readonly appName: string
    version: number
}

const config: AppConfig = {
    appName: 'heyguru',
    version: 1,
}

// config.appName = 'newName' // ❌ NOT allowed—readonly
config.version = 1.2 // ✔ Allowed
