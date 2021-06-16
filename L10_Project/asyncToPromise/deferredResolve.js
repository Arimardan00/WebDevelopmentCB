function downloadPromise() {
  return new Promise(function(resolve, reject) {
    console.log("Starting to download the file");
    setTimeout(function(){
      console.log("Download is complete");
      resolve("Successful");
    }, 3000);
  })
};

// downloadResolve().then(function(data){
//   console.log("After download");
//   console.log(data);
// });

let downloadedFile = downloadPromise()

setTimeout(function(){
  downloadedFile.then(function(){
    console.log("After download");
  })
}, 5000);