// hover on val you will see 'any', user of the function can pass any type of value, so you have to protect that

// function addTwo(val) {return val + 2;}
// addTwo("hello"); // no error as you are not mention the datatype

function addTwo(val: number) {
  return val + 2; // here you can return anything, we will protect it in next file
}
// addTwo("hello") // error as you are passing string

function getUpper(val: string) {
  return val.toUpperCase();
}
getUpper("function in TS");

// function signUpUser(name, email, password){}
// signUpUser() // error showing that expected three arguments
// signUpUser(1,2,3) // no error , but it can't be so you have to mention the type of the argument

function signUpUser(name: string, email: string, isPaid: boolean) {}
// signUpUser(1,2,3) // error
signUpUser("ranjit", "ranjit@own.com", true); // no error

// DEFAULT PARAMETER
function loginUser(email: string, password: string, isPaid: boolean = false) {}
loginUser("ranjit@own.com", "pass123"); // no error

let orderFood = (
  f_name: string,
  f_price: number,
  f_discount: number = 15
) => {};

export {};
