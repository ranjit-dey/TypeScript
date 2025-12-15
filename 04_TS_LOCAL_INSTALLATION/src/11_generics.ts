/* ================================
   GENERIC FUNCTION – WRAP VALUE IN ARRAY
================================ */

/**
 * Takes any type of value and wraps it inside an array
 * T represents a generic type (string, number, object, etc.)
 */
function wrapInArray<T>(value: T): T[] {
    return [value]
}

// Usage examples
wrapInArray('masala') // string[]
wrapInArray(42) // number[]
wrapInArray({ flavor: 'ginger' }) // object[]

/* ================================
   GENERIC FUNCTION – CREATE A PAIR (TUPLE)
================================ */

/**
 * Combines two values of possibly different types
 * and returns them as a tuple
 */
function createPair<A, B>(first: A, second: B): [A, B] {
    return [first, second]
}

// Usage examples
createPair('masala', 'test') // [string, string]
createPair('masala', 20) // [string, number]
createPair({ flavor: 'masala' }, 20) // [object, number]

/* ================================
   GENERIC INTERFACE – BOX
================================ */

/**
 * A reusable container that can store any type of content
 */
interface Box<T> {
    content: T
}

// Boxes holding different types
const numberBox: Box<number> = { content: 20 }
const stringBox: Box<string> = { content: '20' }
const objectBox: Box<object> = { content: {} }

/* ================================
   GENERIC INTERFACE – API RESPONSE
================================ */

/**
 * Represents a standard API response
 * T defines the shape of the response data
 */
interface ApiResponse<T> {
    status: number
    data: T
}

// API response with strongly typed data
const chaiApiResponse: ApiResponse<{ flavor: string }> = {
    status: 200,
    data: { flavor: 'masala' },
}
