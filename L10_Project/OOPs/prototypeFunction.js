function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.isAdult = function () {
  return this.age >= 18;
};

let p = new Person("Sonu", 20);
let p2 = new Person("Monu", 15);

console.log(p.isAdult());
console.log(p2.isAdult());
console.log(p.isAdult == p2.isAdult);