$(function(){
  let inpName = $('#inpName');
  let inpAge = $('#inpAge');
  let inpCity = $('#inpCity');
  let btnSubmit = $('#btnSubmit');
  let tblPersons = $('#tblPersons');

  function refreshPersonTable(persons){
    tblPersons.empty();
    tblPersons.append(
      `<tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
      </tr>`
    );
    for(person of persons) {
      tblPersons.append(
        `<tr>
          <td>${person.name}</td>
          <td>${person.age}</td>
          <td>${person.city}</td>
        </tr>`
      );
    }
  }

  $.get('/api/persons', function(data){
    refreshPersonTable(data);
  });

  btnSubmit.click(function(){
    $.post(
      '/api/persons',
      {
        name: inpName.val(),
        age: inpAge.val(),
        city: inpCity.val()
      },
      function(data){
        refreshPersonTable(data);
      }
    )
  })

})