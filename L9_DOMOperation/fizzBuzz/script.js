let inpNum = document.getElementById("inpNum");
let btnPrint = document.getElementById("btnPrint");
let ulNumList = document.getElementById("ulNumList");

btnPrint.onclick = function(){
  let start = Date.now();
  ulNumList.innerHTML = '';
  for(let i = 1; i <= inpNum.value; i++){
    let li = document.createElement('li');

    let print = '';

    if(i % 3 == 0) print += "Fizz";
    if(i % 5 == 0) print += "Buzz";
    if(print === '') print = i; 
    
    li.textContent = print;

    ulNumList.appendChild(li);
  }

  console.log("Time taken", Date.now() - start);
}