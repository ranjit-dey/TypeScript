/* =========================================================
   BASIC CLASS + CONSTRUCTOR CONCEPT
   ========================================================= */

class Chai {
    flavour: string
    price: number

    // Constructor runs automatically when an object is created
    // It initializes object properties
    constructor(flavour: string, price: number) {
        this.flavour = flavour
        this.price = price

        // `this` refers to the current object instance
        console.log('New Chai Created:', this)
    }
}

// Creating an object using the constructor
const masalaChai = new Chai('Ginger', 25)

// Properties can be modified after object creation
masalaChai.flavour = 'Masala'

/* =========================================================
   ACCESS MODIFIERS: public, private
   ========================================================= */

class ChaiWithSecrets {
    // public is default → accessible everywhere
    public flavour: string = 'Masala'

    // private → accessible only inside this class
    private secretIngredients = 'Cardamom'

    // public method can access private members
    revealSecret() {
        return this.secretIngredients
    }
}

const chai = new ChaiWithSecrets()
// chai.secretIngredients ❌ ERROR (private)
chai.revealSecret() // ✅ allowed

/* =========================================================
   PROTECTED ACCESS MODIFIER
   ========================================================= */

class Shop {
    // protected → accessible inside class + subclasses
    protected shopName = 'Chai Corner'
}

class Branch extends Shop {
    getShopName() {
        // allowed because Branch extends Shop
        return this.shopName
    }
}

const branch = new Branch()
branch.getShopName()
// branch.shopName ❌ ERROR (protected)

/* =========================================================
   PRIVATE CLASS FIELD (#) — JAVASCRIPT NATIVE
   ========================================================= */

class Wallet {
    // # makes this truly private at runtime
    #balance = 100

    getBalance() {
        return this.#balance
    }
}

const wallet = new Wallet()
wallet.getBalance()
// wallet.#balance ❌ ERROR (even JS blocks this)

/* =========================================================
   READONLY PROPERTY
   ========================================================= */

class Cup {
    // readonly → value can be set only once
    readonly capacity: number

    constructor(capacity: number) {
        this.capacity = capacity
    }
}

const cup = new Cup(250)
// cup.capacity = 300 ❌ ERROR (readonly)

/* =========================================================
   GETTERS & SETTERS (ENCAPSULATION)
   ========================================================= */

class ModernChai {
    private _sugar = 2

    // getter → used like a property
    public get sugar(): number {
        return this._sugar
    }

    // setter → allows validation before assignment
    public set sugar(value: number) {
        if (value > 5) {
            throw new Error('Too sweet!')
        }
        this._sugar = value
    }
}

const modernChai = new ModernChai()
modernChai.sugar = 3 // setter
console.log(modernChai.sugar) // getter

/* =========================================================
   STATIC MEMBERS
   ========================================================= */

class EkChai {
    // static belongs to the class, not objects
    static shopName = 'Chaicode Cafe'

    constructor(public flavour: string) {}
}

console.log(EkChai.shopName)

const ek = new EkChai('Masala')
// ek.shopName ❌ ERROR (static)

/* =========================================================
   ABSTRACT CLASS
   ========================================================= */

abstract class Drink {
    // abstract method → must be implemented by child
    abstract make(): void
}

class MyChai extends Drink {
    make() {
        console.log('Brewing chai...')
    }
}

const myChai = new MyChai()
myChai.make()

/* =========================================================
   DEPENDENCY INJECTION (COMPOSITION)
   ========================================================= */

class Heater {
    heat() {
        console.log('Heating water...')
    }
}

class ChaiMaker {
    // Dependency injected via constructor
    constructor(private heater: Heater) {}

    make() {
        // using injected dependency
        this.heater.heat()
        console.log('Chai is ready!')
    }
}

const heater = new Heater()
const chaiMaker = new ChaiMaker(heater)
chaiMaker.make()
