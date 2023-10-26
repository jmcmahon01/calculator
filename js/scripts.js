//Business Logic
function add(number1, number2) {
  return number1 + number2;
}
function sub(number1, number2) {
  return number1 - number2;
}
function mult(number1, number2) {
  return number1 * number2;
}
function div(number1, number2) {
  return number1 / number2;
}

//User Interface Logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"))




window.alert(number1 + " + " + number2 + " = " + add(number1, number2) + "\n"
  + number1 + " - " + number2 + " = " + sub(number1, number2) + "\n");









