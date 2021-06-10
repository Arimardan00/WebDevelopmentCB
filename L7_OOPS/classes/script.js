class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  isAdult(){
    return this.age >= 18;
  }
};

let p = new Person("sonu", 12);
console.log(typeof p); // function; there is NO NEW datatype called 'class'
console.log(p.__proto__ == Person.prototype);
console.log(p.__proto__.__proto__ == Object.prototype)

class Student extends Person {
  constructor(name, age, grade){
    super(name, age);
    this.grade = grade;
  }
};

let s1 = new Student('sonu', 21, 12);
let s2 = new Student('monu', 20, 10);

console.log(s1.__proto__ == Student.prototype);
console.log(s1.__proto__.__proto__ == Person.prototype);
console.log(s1.__proto__.__proto__.__proto__ == Object.prototype);

// inheritance chain
// Object.prototype -> Person.prototype -> Student.prototype

// No inheritance between the classes (actually they are functions)
// object -x -> Person -x -> Student 
