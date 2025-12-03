function addTwo(val: number): number {
  return val + 2; // here you can return only number
  //   return "hello" // throw an error
}

/* where you don't know */
function getValue(val: number) {
  if (val > 5) return true;
  return "200 OK";
}

/* IN ARROW FUNCTION */
const getHello = (myVal: string): string => {
  return "Hey there!!";
};

const heros = ["thor", "spiderman", "marvel"];
// const heros = [1,2,3];

// heros.map((hero) : number => {
//     return 5
// })

let allComments = heros.map((hero): string => {
  return `Hero is ${hero}`;
});

console.log(allComments);

/* if you want nothing to return then you have to explicitly mention  */

function consoleError(errmsg: string): void {
  console.log(errmsg);
  // return "Hello" // will show an error
}

// printHello();

function fail(msg: string): never {
  throw new Error(msg);
}

fail("You failed!!");
