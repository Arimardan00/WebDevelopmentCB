let inpCode = document.getElementById('inpCode');
let btnEncode = document.getElementById("btnEncode");
let code = document.getElementById("code");
let btnEncrypt = document.getElementById("btnEncrypt");

btnEncode.onclick = function(){
  let data = inpCode.value;
  
  // character to base64
  data = btoa(data);
  code.value = data;
}

btnEncrypt.onclick = function(){
  let data = code.value;
  data = encryptData(data);
  code.value = data;
}

function encryptData(rawData){
  /*
    TODO: encrypt data
    logic: turn lowercase chars to uppercase and viceversa
  */
  return "XXXXXXXX";
}
