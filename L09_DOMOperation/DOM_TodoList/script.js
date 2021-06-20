let newTask = document.getElementById("newTask");
let addTask = document.getElementById("addTask");
let todoList = document.getElementById("todoList");

addTask.onclick = function(){
  let li = document.createElement("li");

  // Add X btn
  let xBtn = document.createElement("button");
  xBtn.innerText = "❌";
  xBtn.onclick = function (event) {
    event.target.parentElement.remove();
  };

  // Add up button
  let upBtn = document.createElement("button");
  upBtn.innerText = "👆🏻";
  upBtn.onclick = function (event) {
    // event.target = The up button
    // event.target.parentElement = the <li> item
    // event.target.parentElement.parentElement is the todolist
    event.target.parentElement.parentElement.insertBefore(
      event.target.parentElement, // insert this element
      event.target.parentElement.previousElementSibling // before it's previous element
    );
  };

  // Add down button
  let downBtn = document.createElement("button");
  downBtn.innerText = "🔻";
  downBtn.onclick = function (event) {
    // event.target = The up button
    // event.target.parentElement = the <li> item
    // event.target.parentElement.parentElement is the todolist
    event.target.parentElement.parentElement.insertBefore(
      event.target.parentElement.nextElementSibling, // After it's next element
      event.target.parentElement // insert this element
    );
  };

  // Add the task text
  let taskSpan = document.createElement("span");
  taskSpan.innerText = newTask.value;

  li.appendChild(xBtn);
  li.appendChild(upBtn);
  li.appendChild(downBtn);
  li.appendChild(taskSpan);
  todoList.appendChild(li);
}