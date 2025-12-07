let user = {
  name: "ranjit",
  email: "ranjit@own.com",
  isActive: false,
};

function createUser({ name: string, isPaid: boolean }) { }
// createUser({name: 'ranjit', isPaid:false});
// createUser({name : 'ranjit', isPaid: true, email : 'ranjit@own.com'}) // here you can't pass another parameter

let mainUser = { name: "ranjit", isPaid: true, email: "ranjit@own.com" };
createUser(mainUser); // here you can pass email as extra parameter // this is odd behaviour of TS.

/* function returns an object */
function abcd(): {} {
  return {};
}

function createCourse(): { name: string; price: number } {
  return { name: "TYPESCRIPT", price: 56 };
}
