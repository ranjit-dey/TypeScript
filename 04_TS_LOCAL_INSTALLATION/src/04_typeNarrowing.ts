// ========================================
// 1. Basic union types in function params
//    - string | number
//    - optional parameters
//    - literal unions
// ========================================

// kind can be a string (name of chai) OR a number (order id)
function getChai(kind: string | number) {
    if (typeof kind === "string") return `Making ${kind} chai...`
    return `Chai order ID: ${kind}`
}

// msg is optional, so we use an optional parameter + truthy check
function serveChai(msg?: string) {
    if (msg) return `Serving ${msg}`
    return `Serving default masala chai...`
}

// size can be one of three literal strings OR any number (for order id)
function orderChai(size: "small" | "medium" | "large" | number) {
    if (size === "small") return `Small cutting chai`
    if (size === "medium" || size === "large") return `Make extra chai`
    return `Chai order #${size}`
}


// ========================================
// 2. Classes + instanceof narrowing
// ========================================

class KulhadChai {
    serve() {
        return `Serving kulhad chai`
    }
}

class Cutting {
    serve() {
        return `Serving cutting chai`
    }
}

// union of classes + instanceof based narrowing
function serveCup(chai: KulhadChai | Cutting) {
    if (chai instanceof KulhadChai) {
        return chai.serve()
    }
    if (chai instanceof Cutting) {
        return chai.serve()
    }

    // this line is never reached right now,
    // but we keep it for exhaustiveness
    return "Unknown chai type"
}


// ========================================
// 3. Object type + custom type guard (`obj is chaiOrder`)
// ========================================

type chaiOrder = {
    type: string
    sugar: number
}

let chaiOrderExample: chaiOrder = { type: "Kulhad", sugar: 2 }

// Correct type guard:
//  - check that it's an object and not null
//  - check types of properties using typeof
function isChaiOrder(obj: unknown): obj is chaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        "type" in obj &&
        "sugar" in obj &&
        typeof (obj as any).type === "string" &&
        typeof (obj as any).sugar === "number"
    )
}

function serveOrder(item: chaiOrder | string) {
    // Here TypeScript will narrow item to chaiOrder if isChaiOrder returns true
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar...`
    }
    return `Serving custom chai: ${item}`
}


// ========================================
// 4. Discriminated unions + exhaustive switch
// ========================================

type MasalaChai = { type: "masala"; spicelevel: number }
type GingerChai = { type: "ginger"; amount: number }
type ElaichiChai = { type: "elaichi"; aroma: number }

// Discriminated union by the `type` field
type Chai = MasalaChai | GingerChai | ElaichiChai

function makeChai(order: Chai) {
    switch (order.type) {
        case "masala":
            return `Making masala chai with spice level ${order.spicelevel}...`
        case "ginger":
            return `Making ginger chai with ${order.amount}g ginger...`
        case "elaichi":
            return `Making elaichi chai with aroma level ${order.aroma}...`
        default:
            // never case for exhaustiveness check
            const _exhaustive: never = order
            return _exhaustive
    }
}


// ========================================
// 5. "in" operator narrowing (property existence)
// ========================================

function brew(order: MasalaChai | GingerChai) {
    if ("spicelevel" in order) {
        // if spicelevel property exists in order then it must be MasalaChai
        console.log("Brewing masala chai with spice level:", order.spicelevel)
    } else {
        // otherwise it must be GingerChai
        console.log("Brewing ginger chai with amount:", order.amount)
    }
}


// ========================================
// 6. Array type guard (`unknown` -> `string[]`)
// ========================================

function isStringArray(arr: unknown): arr is string[] {
    // Check it's an array AND every element is a string
    return Array.isArray(arr) && arr.every(item => typeof item === "string")
}


// ========================================
// 7. Tiny demo to "do something" with all this
// ========================================

function chaiDemo() {
    console.log(getChai("masala"))           // "Making masala chai..."
    console.log(getChai(101))               // "Chai order ID: 101"

    console.log(serveChai("hot ginger chai"))
    console.log(serveChai())                // default

    console.log(orderChai("small"))
    console.log(orderChai(42))

    const kulhad = new KulhadChai()
    const cutting = new Cutting()
    console.log(serveCup(kulhad))
    console.log(serveCup(cutting))

    console.log(serveOrder(chaiOrderExample))
    console.log(serveOrder("sugar-free green chai"))

    const masala: MasalaChai = { type: "masala", spicelevel: 5 }
    const ginger: GingerChai = { type: "ginger", amount: 10 }
    const elaichi: ElaichiChai = { type: "elaichi", aroma: 3 }

    console.log(makeChai(masala))
    console.log(makeChai(ginger))
    console.log(makeChai(elaichi))

    brew(masala)
    brew(ginger)

    const arr1: unknown = ["chai", "coffee"]
    const arr2: unknown = ["chai", 2]

    if (isStringArray(arr1)) {
        console.log("arr1 is a string[]:", arr1.join(", "))
    }

    if (!isStringArray(arr2)) {
        console.log("arr2 is NOT a string[]")
    }
}

// Run the demo (you can comment this out in real code)
chaiDemo()
