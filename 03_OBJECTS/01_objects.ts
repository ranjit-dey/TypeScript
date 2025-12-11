// Basic user object
let user = {
  name: "ranjit",
  email: "ranjit@own.com",
  isActive: false,
};

// Type alias for the createUser function parameter
type CreateUserType = {
  name: string;
  isPaid: boolean;
};

// Function that accepts only name + isPaid
function createUser({ name, isPaid }: CreateUserType): void { }

createUser({ name: "ranjit", isPaid: false });

// ❌ Error: extra property (email) not allowed in object literal
// createUser({ name: "ranjit", isPaid: true, email: "ranjit@own.com" });

// ✔ Allowed: extra property when assigned to a variable first
let mainUser = { name: "ranjit", isPaid: true, email: "ranjit@own.com" };
createUser(mainUser); // Works because TS allows extra properties on variables


/* ----------- Functions returning objects ----------- */

// Function returning an empty object
function abcd(): {} {
  return {};
}

// Function return type defined inline (no interface used)
function createCourse(): { name: string; price: number } {
  return { name: "TYPESCRIPT", price: 56 };
}

const courseDetails = createCourse();
console.log(courseDetails);
