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
  $("form#calc").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());
    var operator = $("#operator").val();
    var num1type = typeof number1;
    var num2type = typeof number2;

    if (operator==="add") {
      var result = add(number1, number2);
      $("#output").text(result);
    } else if (operator==="subtract") {
      var result = subtract(number1, number2);
      $("#output").text(result);
    } else if (operator==="multiply") {
      var result = multiply(number1, number2);
      $("#output").text(result);
    } else if (operator==="divide") {
      var result = divide(number1, number2);
      $("#output").text(result);
    }
  });
});
