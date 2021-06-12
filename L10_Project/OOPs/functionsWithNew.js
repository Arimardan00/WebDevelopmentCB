function Person(name, age){
  this.name = name;
  this.age = age;
}

let p = new Person("Harry Potter", 20);
console.log("P: ", JSON.stringify(p));