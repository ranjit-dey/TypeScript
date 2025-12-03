// this is too ovbious so if you write the below code like this then the typescript is smart enough to check if you change the data type then it will throw an error.

// let greetings = "hello Ranjit" // so this becomes a string if you change type later on then it will throw an error
let greetings: string = 'Hello Ranjit'
// greetings = 75; // throw an error
console.log(greetings)

let myNum: number
myNum = 45 // instead of doing this => let myNum = 45; // better
// console.log(myNum)

// Best practice
let anotherNum = 56.36
anotherNum.toFixed(1)
// anotherNum = "ranjit" // typescript detect that anotherNum is a number you can't assign a string value to it

// myNum.toLowerCase();

let standard = greetings.toLowerCase()
console.log(standard)

export {} // temporary the squiggles line will remove
