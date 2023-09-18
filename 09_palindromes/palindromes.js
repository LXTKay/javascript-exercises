const palindromes = function (input) {
  input = input.toLowerCase().split("");
  for(let i = 0; i < input.length; i++)
    if(input[i] == "."
    || input[i] == ","
    || input[i] == ":"
    || input[i] == ";"
    || input[i] == "!"
    || input[i] == " "){
      input[i] = "";
    };
  input = input.join("");
  let reverse = input.split("").reverse().join("");
  console.log(input);
  console.log(reverse);
  for(let i = 0; i < input.length; i++){
    if(input[i] !== reverse[i]) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
