$(function(){
  let inpTask = $("#inpTask");
  let btnAdd = $("#btnAdd");
  let ulTodoList = $("#ulTodoList");

  btnAdd.click(function(){
    let newTodo = inpTask.val();
    $.post(
      '/todos',
      {task: newTodo},
      function(data){
        ulTodoList.empty();
        for(todo of data){
          let listItem = $('<li>', {text: todo.task});
          ulTodoList.append(listItem);
        }
      }
    )
  });
})