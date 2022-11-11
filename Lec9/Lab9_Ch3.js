function add(){
  var number1 = Number(document.getElementById('num1').value);
  var number2 = Number(document.getElementById('num2').value);

  var output = number1 + number2;

  document.getElementById('output').innerHTML = output;
}
