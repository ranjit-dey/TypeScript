// Basic user object
var user = {
    name: "ranjit",
    email: "ranjit@own.com",
    isActive: false,
};
// Function that accepts only name + isPaid
function createUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
}
createUser({ name: "ranjit", isPaid: false });
// ❌ Error: extra property (email) not allowed in object literal
// createUser({ name: "ranjit", isPaid: true, email: "ranjit@own.com" });
// ✔ Allowed: extra property when assigned to a variable first
var mainUser = { name: "ranjit", isPaid: true, email: "ranjit@own.com" };
createUser(mainUser); // Works because TS allows extra properties on variables
/* ----------- Functions returning objects ----------- */
// Function returning an empty object
function abcd() {
    return {};
}
// Function return type defined inline (no interface used)
function createCourse() {
    return { name: "TYPESCRIPT", price: 56 };
}
var courseDetails = createCourse();
console.log(courseDetails);
