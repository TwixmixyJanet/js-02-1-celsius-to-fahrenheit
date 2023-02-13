var tempCelsius = prompt("What temperature is it in Canada?");
var toFahrenheit = tempCelsius * 1.8 + 32;
console.log(
  `In Canada it's ${tempCelsius} degrees Celsius, which is ${toFahrenheit} degrees Fahrenheit.`
);

var taxAmount = 7.23335651;
console.log(`The tax amount is ${taxAmount.toFixed(2)}`);
// 7.23

var people = 27;
var payout = 800.29;
console.log(`You won $${(payout / people).toFixed(2)}.`);
// You won $29.64.
