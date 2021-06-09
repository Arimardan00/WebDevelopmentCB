let str = "abc";          // 3 level from null
let num = 10;             // 3 level from null
let bool = true;          // 3 level from null
let arr = [10, 20, 30];   // 3 level from null
let obj = {               // 2 level from null
  a: 10,
  b: "xyz"
}
let fun = function() {    // 3 level from null
  console.log("yay");
}

// String(19), 

// if x and y are not primitive
// x == y : true <- what does this mean?
// this means that are refernce to the same object in memory
console.log("======== types ========");
console.log("typeof String", typeof String);
console.log("typeof Number", typeof Number);
console.log("typeof Boolean", typeof Boolean);
console.log("typeof Array", typeof Array);
console.log("typeof Object", typeof Object);
console.log("typeof Function", typeof Function);

console.log("======== proto chain ========");
console.log(str.__proto__.__proto__ == obj.__proto__);
console.log(num.__proto__.__proto__ == obj.__proto__);
console.log(bool.__proto__.__proto__ == obj.__proto__);
console.log(arr.__proto__.__proto__ == obj.__proto__);
console.log(fun.__proto__.__proto__ == obj.__proto__);

// Everything indirectly inherits from the same thing that obj is 
// inherited from i.e. in javascript everything is essentially an Object 

console.log("========= prototypes =========");
console.log(obj.__proto__ == Object.prototype);
console.log(str.__proto__ == String.prototype);
console.log(num.__proto__ == Number.prototype);
console.log(bool.__proto__ == Boolean.prototype);
console.log(arr.__proto__ == Array.prototype);
console.log(fun.__proto__ == Function.prototype);