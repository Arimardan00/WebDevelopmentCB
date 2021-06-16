function someAsyncTask(callback) {
  console.log("Beginning of task");
  setTimeout(function () {
    console.log("end of task");
    callback();
  }, 3000);
}

// someAsyncTask(function(){
//   console.log("We did some task");
// })

let someTaskPromise = new Promise(function (resolve, reject) {
  someAsyncTask(resolve);
});


someTaskPromise.then(function () {
  console.log("After task is completed");
});
