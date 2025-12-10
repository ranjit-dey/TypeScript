// =====================================
// 1. Type assertions: `any` and `as`
// =====================================

// `any` disables type checking.
// Here we *know* it's a string, so we assert it.
let response: any = "42"

// You are telling TS: "trust me, this is a string"
// so you can access `.length` without error.
let numericLength: number = (response as string).length
console.log("numericLength:", numericLength)


// =====================================
// 2. Asserting JSON.parse result
// =====================================

type Book = {
    name: string
    price: number
}

let bookString = '{"name": "Rich dad poor dad", "price": 23}'

// JSON.parse returns `any`, so we assert that
// it matches the `Book` shape.
let bookObject = JSON.parse(bookString) as Book

console.log("Book name:", bookObject.name)
console.log("Book price:", bookObject.price)


// =====================================
// 3. DOM element casting
// =====================================

// We *expect* this id to be an <input>, so we assert.
// In real apps, you might want null-checks to avoid runtime errors.
const inputElement = document.getElementById("username") as HTMLInputElement | null

if (inputElement) {
    inputElement.value = "ranjit"
}


// =====================================
// 4. `any` vs `unknown`
// =====================================

let value: any

value = "hello"
value = 8
value = [9, 3, 3]

// No squiggly line: `any` turns off type safety.
// This can compile but crash at runtime if `value` is not a string.
value.toUpperCase()

let newValue: unknown

newValue = "hello"
newValue = 8
newValue = [9, 3, 3]

// ❌ Error: Property 'toUpperCase' does not exist on type 'unknown'
// newValue.toUpperCase()

// ✅ Better: narrow the type first with typeof
if (typeof newValue === "string") {
    newValue.toUpperCase()
}


// =====================================
// 5. Error handling with narrowing
// =====================================

try {
    // some risky code...
} catch (error) {
    // `error` is `unknown` in TS, so we narrow it.
    if (error instanceof Error) {
        console.log("Error message:", error.message)
    }
    console.log("Error object:", error)
}


// =====================================
// 6. More assertions with `unknown`
// =====================================

const data: unknown = "ranjitdey"

// We assert that `data` is a string.
// If it's not, you get a runtime error (but compile-time is happy).
const strData: string = data as string
console.log("strData length:", strData.length)


// =====================================
// 7. Literal unions + control flow narrowing
// =====================================

type Role = "admin" | "user" | "superadmin"

function redirectBasedOnRole(role: Role): void {
    if (role === "admin") {
        console.log("Redirecting to admin page...")
        return
    }

    if (role === "user") {
        console.log("Redirecting to user page...")
        return
    }

    // At this point, type is "superadmin"
    // (hover over `role` in TS: it will show "superadmin")
    role
    console.log("Redirecting to superadmin panel...")
}


// =====================================
// 8. `never` – functions that never return
// =====================================

function neverReturn(): never {
    while (true) {
        // infinite loop: this function never reaches a return point
    }
    // or: throw new Error("This always throws")
}
