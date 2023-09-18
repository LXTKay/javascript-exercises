const sumAll = function(number1, number2) {
  if(typeof number1 != "number"
  || typeof number2 != "number"
  || number1 < 0
  || number2 < 0){
    return "ERROR"
  };

  let smallerNumber = number1;
  let biggerNumber = number2;
  if(number2 < number1){
    smallerNumber = number2;
    biggerNumber = number1;
  };
  let sum = 0;

  for(smallerNumber; smallerNumber <= biggerNumber; smallerNumber++){
    sum += smallerNumber;
  };

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
