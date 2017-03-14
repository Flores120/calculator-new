function add(number1, number2) {
  var add = number1 + number2;
}
function subtract(number1, number2) {
  var subtract = number1 - number2;
}
function multiply(number1, number2) {
  var multiply = number1 * number2;
}

var differnce = subtract();
var product = multiply();
var sum = add();
var results = 0;
var operation = null;
var type = "";
var at = 0;

 $(document).ready(function(){
   //when user clicks on a key, it displays value in screen.
   $('.number').click(function(){
    var key = $(this).val();
    $('#display').append(key);
    });
    //resets everything.
     $('#clear').click(function(){
       if (this.id = '#clear') {
         $('#display').empty();
         results = 0;
       }
  });
  $('#add').click(function(){
    if (this.id = '#add') {
      var key = $('#display').text();

      type = key[key.length - 1];

      var holder = "";

      at = key.length;

      for (var i = 0; i < key.length - 1; i++) {
        holder += key[i];
      }

      results = parseInt(holder);
      console.log(results);
      console.log(type);
      console.log(at);
    }
});

$('#submit').click(function() {


  var holder = "";

  var key = $('#display').text();

  for (var i = at; i < key.length; i++) {
    holder += key[i];
  }

  if (type === "+") {
    results += parseInt(holder);
  }

  $('#display').text(results);

  results = 0;

});

});
