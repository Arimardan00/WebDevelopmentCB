function sayHello(name) {
  console.log('Hello', name);
}

module.exports = {
  sayHello
}

setTimeout(()=>{
  module.exports.wow = "Hello";
}, 1000);