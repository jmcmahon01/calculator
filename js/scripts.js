function saySomething(whatToSay) {
  window.alert(whatToSay);
}
function add(number1, number2) {
  return number1 + number2;
}
saySomething("Hi!");

const result = add(3, 5);
const outPutText = "The sum is " + result + ".";
saySomething(outPutText);

