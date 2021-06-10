let inpNum = document.getElementById("inpNum");
let btnPrint = document.getElementById("btnPrint");
let ulNumList = document.getElementById("ulNumList");

btnPrint.onclick = function() {
  let start = Date.now();
  ulNumList.innerHTML = '';
  let threeMul = 3, fiveMul = 5;
  for(let i = 1; i <= inpNum.value; i++){
    let li = document.createElement('li');
    let print = '';
    
    if(i == threeMul){
      print += "Fizz";
      threeMul += 3;
    }
    if(i == fiveMul){
      print += "Buzz";
      fiveMul += 5;
    }
    if(print === '') print = i;

    li.textContent = print;
    ulNumList.appendChild(li);
  }

  console.log("Time taken", Date.now() - start);
}