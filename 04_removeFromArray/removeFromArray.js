const removeFromArray = function(inputArray, ...itemsToRemove) {
  let output = [];
  inputArray.filter(element => {
    for(let i = 0; i < itemsToRemove.length; i++){
      if(itemsToRemove[i] === element) return;
    };
    output.push(element);
  });
  return output;
};

// Do not edit below this line
module.exports = removeFromArray;
