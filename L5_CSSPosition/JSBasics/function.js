console.log(alpha()); // hositing | output:- a
function alpha(){
  return "a";
}

console.log(beta()); // hositing | output:- b
function beta(){
  return "b";
}

// reference error because let not support hoisting
// console.log(gamma()); 
let gamma = function() {
  return "c";
}

function area(height, width){
  if(width === undefined)
    return Math.PI * height * height;
  return height * width;
}

console.log("area 3, 4", area(3, 4));
console.log("area 5", area(5));