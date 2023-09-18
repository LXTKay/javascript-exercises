const leapYears = function(year) {
  let output = false;
  if(Number.isInteger(year / 4)) output = true;
  if(Number.isInteger(year / 100)
  && !Number.isInteger(year / 400)) output = false;
  return output;
};

// Do not edit below this line
module.exports = leapYears;
