let response: any = '42'

// you are saying that reponse will be as string so that you can access the length property in suggestion
let numericLength: number = (response as string).length

type Book = {
    name: string
    price: number
}

let bookString = '{"name": "Rich daddy poor daddy", "price": 23}'
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject.name)

// you know that the returned element will be a HTML input element
const inputElement = document.getElementById('username') as HTMLInputElement

let value: any

value = 'hello'
value = 8
value = [9, 3, 3]

// no squiggle line is there as error
value.toUpperCase()

let newValue: unknown

newValue = 'hello'
newValue = 8
newValue = [9, 3, 3]

// newValue.toUpperCase() // will show a squiggle lines

// better way
if (typeof newValue === 'string') newValue.toUpperCase()

try {
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message)
    }
    console.log('Error :', error)
}


const data: unknown = "ranjitdey"
const strData : string = data as string;

type Role = "admin" | 'user' | 'superadmin'

function redirectBasedOnRole(role: Role): void{
    if(role === 'admin') {
        console.log("Redirecting to admin page...");
        return
    }
    if(role === 'user') {
        console.log("Redirecting to user page...");
        return
    }
    // role; // remove 'superadmin' from type Role you will see role : unknown on hover
    role; // hover on it (superadmin)
}

function neverReturn():never{
    while(true){}
}
