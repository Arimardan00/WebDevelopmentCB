function download(url) {
  return new Promise(function (resolve, reject) {
    if (!url.startsWith("http")) {
      reject(new Error("Url does not start with http"));
    } else {
      setTimeout(function () {
        // fake 3-sec download task
        console.log("start download : " + url);
        let fileName = url.split("/").pop();
        resolve(fileName);
      }, 3000);
    }
  });
}

function resize(fileName) {
  return new Promise(function (resolve, reject) {
    if (!fileName.endsWith(".png")) {
      reject(new Error("File is not png"));
    } else {
      setTimeout(function () {
        // fake 3-sec resize task
        // change x.png -> x-resized.png
        console.log("start resize : " + fileName);
        let resizedFile = fileName.split(".")[0] + "-resized.png";
        resolve(resizedFile);
      }, 3000);
    }
  });
}

function upload(resizedFileName) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("start upload : " + resizedFileName);
      let uploadedUrl = "http://imgur.com/" + resizedFileName;
      resolve(uploadedUrl);
    }, 3000);
  });
}

Promise.all([
  download("http://cb.lk/logo.png"),
  download("http://cb.lk/banner.png"),
  download("http://cb.lk/promo.png"),
])
  .then(function (downloadValues) {
    // this will execute when all promises are accepted
    // console.log(values);
    // return values.map(function(item){return resize(item)});
    return Promise.all(downloadValues.map(resize));
  })
  .then(function(resizeValues){
    return Promise.all(resizeValues.map(upload));
  })
  .then(function(uploadValues){
    console.log(uploadValues);
  })
  .catch(function (err) {
    // this will execute when even one promise failed
    console.log(err);
  });
