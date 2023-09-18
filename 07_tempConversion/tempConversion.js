const convertToCelsius = function(inputFahrenheit) {
  let outputCelsius = (inputFahrenheit - 32) * (5 / 9);
  outputCelsius = Math.round(outputCelsius * 10) / 10;
  return outputCelsius;
};

const convertToFahrenheit = function(inputCelsius) {
  let outputFahrenheit = inputCelsius * ( 9 / 5 ) + 32;
  outputFahrenheit = Math.round(outputFahrenheit * 10) / 10;
  return outputFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
