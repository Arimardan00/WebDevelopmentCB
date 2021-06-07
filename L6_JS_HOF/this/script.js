function checkThis() {
  console.log(this);
}

let obj = {
  "x": 10,
  a: 1,
  b: "abc",
  c: true,
  d: function(){
    console.log(this);
  },
  e: {
    f: "sonu",
    g: 20
  }
}