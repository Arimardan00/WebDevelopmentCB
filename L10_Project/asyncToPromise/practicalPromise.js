function download(url){
  return new Promise(function(resolve, reject){
    if(!url.startsWith("http")){
      reject(new Error("Url does not start with http"));
    }else{
      setTimeout(function(){ // fake 3-sec download task
        console.log("start download : " + url);
        let fileName = url.split('/').pop();
        resolve(fileName);
      }, 3000);
    }
  });
}

function resize(fileName){
  return new Promise(function(resolve, reject){
    if(!fileName.endsWith(".png")){
      reject(new Error("File is not png"));
    }else{
      setTimeout(function(){ // fake 3-sec resize task
        // change x.png -> x-resized.png
        console.log("start resize : " + fileName);
        let resizedFile = fileName.split('.')[0] + '-resized.png';
        resolve(resizedFile);
      }, 3000);
    }
  })
}

function upload(resizedFileName) {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log("start upload : " + resizedFileName);
      let uploadedUrl = "http://imgur.com/" + resizedFileName
      resolve(uploadedUrl)
    }, 3000);
  })
}

download("http://cb.lk/logo.png")
  .then(resize)
  .then(upload)
  .then(function(uploadedUrl){
    console.log("File was uploaded to : " + uploadedUrl);
  })
  .catch(err=>{
    console.log(err);
  });