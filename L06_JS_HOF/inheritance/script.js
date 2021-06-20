let obj1 = {
  a: 10,
  b: 20,
  c: 30
}

let obj2 = Object.create(obj1);
obj2.p = 40;
obj2.q = 50;

let obj3 = Object.create(obj2);
