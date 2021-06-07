function createGreeter(greeting){
  function greet(name){
    console.log(greeting, name());
  }
  return greet;
}

function getName(){
  return document.getElementById("namebox").value;
}

let g1 = createGreeter('Good morning');
let g2 = createGreeter('Good evening');

