const fibonacci = function(input) {
  if( typeof input == "string"){
    input = parseInt(input);
  }
  if( input <= 0
  || input == NaN) return "OOPS";

  let a = 0;
  let b = 1;
  let c = 0;

  for(let i = 1; i < input; i++){
    c = a + b;
    a = b;
    b = c;
  };
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
