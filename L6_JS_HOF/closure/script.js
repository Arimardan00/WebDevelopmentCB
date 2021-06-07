function outer(arg1){
  let var1 = 10;
  let x = 10;

  function inner(arg2){
    let var2 = 20;
    let x = 20;
    console.log(arg1, var1, arg2, var2);
    console.log(arguments[0]);
  }
  return inner;
}

let x = outer('param1');
x('param2');