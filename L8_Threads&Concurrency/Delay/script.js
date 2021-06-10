let btnWait = document.getElementById("btnWait");
let btnCount = document.getElementById("btnCount");
let divStatus = document.getElementById("divStatus");
let divVal = document.getElementById("divVal");

let count = 0;

btnCount.onclick = function() {
  count++;
  console.log("count", count);
  divVal.textContent = count;
}

btnWait.onclick = function() {
  divStatus.textContent = "Waiting";
  console.log("Waiting");
  // wait for 5 sec
  // let start = Date.now();
  // while(Date.now() < start + 5000){ /* do nothing */  }
  setTimeout(()=>{
    divStatus.textContent = "Done";
    console.log("Done"); 
  }, 5000);
}