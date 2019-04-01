$(function() {
  var groceries = [];

  $('button[name=next]').click(function() {
    var grocery = $("input[name=list-item]").val();
    groceries.push(grocery);
    document.getElementById("myForm").reset();
  });

  $('form').submit(function(event) {
    $('form').hide();
    groceries.sort();
    var list = groceries.map(function(grocery) {
      return grocery.toUpperCase();
    });
    console.log(groceries);
    console.log(list);
    // $('div.list').append(groceries);
    event.preventDefault();
  })
});