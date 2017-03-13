function add(number1, number2) {
  var add = number1 + number2;
}
function subtract(number1, number2) {
  var subtract = number1 - number2;
}
function multiply(number1, number2) {
  var multiply = number1 * number2;
}
var sum = add(3, 4);
var differnce = subtract(3, 4);
var product = multiply(3, 4);

var keys = document.querySelectorAll('.calculator span');
var operators = ['+', '-', 'x', '/'];

for (var i = 0; i < keys.length; i++) {
  keys[i].onclick = function(e) {
    var input = document.querySelector('#display');
    var inputVal = input.innerHTML;
    var btnVal = this.innerHTML;
  }
}
