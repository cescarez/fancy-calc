var add = function(number1, number2) {
  return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
};
var multiply = function(number1, number2) {
  return number1 * number2;
};
var divide =  function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $(".number").click(function(event) {
    event.preventDefault();
    var input = parseInt($(this).val());
    $("#output").append(input);

    // if (operator==="add") {
    //   var result = add(number1, number2);
    //   $("#output").text(result);
    // } else if (operator==="subtract") {
    //   var result = subtract(number1, number2);
    //   $("#output").text(result);
    // } else if (operator==="multiply") {
    //   var result = multiply(number1, number2);
    //   $("#output").text(result);
    // } else if (operator==="divide") {
    //   var result = divide(number1, number2);
    //   $("#output").text(result);
    // }
  });
});
