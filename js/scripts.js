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
  $("button").click(function(event) {
    event.preventDefault();

    if (".number") {
      var input = parseInt($(this).val());
      $("#output").append(input);
    }

  });
});
