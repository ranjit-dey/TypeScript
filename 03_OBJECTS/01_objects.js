var user = {
    name: "ranjit",
    email: "ranjit@own.com",
    isActive: false,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// createUser({name: 'ranjit', isPaid:false});
// createUser({name : 'ranjit', isPaid: true, email : 'ranjit@own.com'}) // here you can't pass another parameter
var mainUser = { name: "ranjit", isPaid: true, email: "ranjit@own.com" };
createUser(mainUser);
