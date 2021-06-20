let btnWait2 = document.getElementById("btnWait2");
let btnCancel2 = document.getElementById("btnCancel2");
let inpTimeout2 = document.getElementById("inpTimeout2");

let wait2 = function (timeout) {
  return new Promise((resolve, reject) => {
    if (isNaN(parseInt(timeout))) {
      reject(new Error("Timeout should be a number"));
    }

    setTimeout(resolve, timeout);
  });
};

btnWait2.onclick = function () {
  wait2(inpTimeout2.value)
    .then(() => {
      console.log(`Waited ${inpTimeout2.value} sec`);
    })
    .catch((err) => {
      console.error(err);
    });
};
