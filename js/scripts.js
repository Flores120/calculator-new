function add(number1, number2) {
  var add = number1 + number2;
}
function subtract(number1, number2) {
  var subtract = number1 - number2;
}
function multiply(number1, number2) {
  var multiply = number1 * number2;
}
var sum = add();
var differnce = subtract();
var product = multiply();

 $(document).ready(function(){
   $('.number').click(function(){
    var key = $(this).val();
    console.log(key);
    $('#display').append(key);
    });
     $('.clear').click(function(){
       $('#display').empty();
  });
});
