// 1. In Array, Remove using rest operator....................................................
let item = "delhi"
const selection = ["delhi", 4, 5, 6]
const itemPos = selection.indexOf(item)   
if (selection.includes(item)) {
  // remove if available
  const {[itemPos]: item, ...rest} = selection
  // `rest` is now an object, so convert back to an array:
  //console.log(Object.values(rest)) // [3, 4, 6]
  //console.log(Object.entries(selection))
} 

// 2.Remove Using splice function  .........................................................
const item2 = 5
const selection2 = [3, 4, 5, 6]
const itemPos2 = selection.indexOf(item)
if (selection2.includes(item2)) {
  // remove if available
  const rest = [...selection2] // Copy array if you still need `selection`; otherwise, we could just splice and pass `selection`
  rest.splice(itemPos2, 1)

  console.log(rest)
} 

// 4. Add Element in array Using spread operator .............................................................  

const ocean = ["delhi" ,"giridih","pesham"];
const fish = ["kura"];

//console.log([ ...fish, ...ocean]);

//4. In Object Destructuring ...........................................
const data1 = { a1: 1, b: 2, c: 3 };
const { a1, b, c } = data1;

//console.log([`${a1}`, b, c]); // 1, 2, 3

// 5. Remove key Using Rest operator ..........................................................
const data = { a2: 1, b2: 2, c2: 3 };

const { b2, ...rest } = data;

//console.log(b2); // 1
//console.log(rest); // { b: 2, c: 3 }

// 6. Remove key Using Rest operator ..........................................................
const data3 = { a: 1, b: 2, c: 3 };

const removeKey = 'c';

const { [removeKey]: remove, ...rest2 } = data3;

//console.log(remove); // 2
//console.log(rest2); // { a: 1, c: 3 }

// 7. Remove key using new object..............................................................
const data4 = { a: 1, b: 2, c: 3 };
const a = data4.a;
const rest4 = { b: data4.b, c: data4.c };

console.log(a); // 1
console.log(rest4); // { b: 2, c: 3 }


