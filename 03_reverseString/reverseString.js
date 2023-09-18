const reverseString = function(input) {
  let output = "";
  for(let i = 1; i <= input.length; i++){
    output = output + input[input.length - i];
  }
  return output;
};

// Do not edit below this line
module.exports = reverseString;
