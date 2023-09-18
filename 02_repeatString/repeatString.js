const repeatString = function(inputString, num) {
  if(num < 0) return "ERROR"
  let outputString = "";
  for(let i = 0; i < num; i++){
    outputString = outputString + inputString;
  };
  return outputString;
};

// Do not edit below this line
module.exports = repeatString;
