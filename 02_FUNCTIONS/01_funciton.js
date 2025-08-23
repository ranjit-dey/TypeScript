// hover on val you will see 'any', user of the function can pass any type of value, so you have to protect that
// function addTwo(val) {return val + 2;}
// addTwo("hello"); // no error as you are not mention the datatype
function addTwo(val) {
    return val + 2;
}
// addTwo("hello") // error as you are passing string
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("function in TS");
// function signUpUser(name, email, password){}
// signUpUser() // error showing that expected three arguments
// signUpUser(1,2,3) // no error , but it can't be so you have to mention the type of the argument
function signUpUser(name, email, isPaid) { }
// signUpUser(1,2,3) // error
signUpUser("ranjit", "ranjit@own.com", true); // no error
// DEFAULT PARAMETER
function loginUser(email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
loginUser("ranjit@own.com", "pass123"); // no error
var orderFood = function (f_name, f_price, f_discount) {
    if (f_discount === void 0) { f_discount = 15; }
};
