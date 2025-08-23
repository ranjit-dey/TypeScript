function addTwo(val) {
    return val + 2; // here you can return only number
    //   return "hello" // throw an error
}
/* where you don't know */
function getValue(val) {
    if (val > 5)
        return true;
    return "200 OK";
}
/* IN ARROW FUNCTION */
var getHello = function (myVal) {
    return "Hey there!!";
};
var heros = ['thor', 'spiderman', 'marvel'];
// const heros = [1,2,3];
// heros.map((hero) : number => {
//     return 5
// })
var allComments = heros.map(function (hero) {
    return "Hero is ".concat(hero);
});
console.log(allComments);

