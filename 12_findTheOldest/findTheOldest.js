function compare(sammler, currentitem, index, array){
  let age;
  if(currentitem.yearOfDeath){
    age = currentitem.yearOfDeath - currentitem.yearOfBirth;
  } else {
    age = new Date().getFullYear() -  currentitem.yearOfBirth;
  }
  currentitem.age = age;
  console.log(currentitem.age);
  if(currentitem.age > sammler.age) return currentitem;
  return sammler;

};

const findTheOldest = function(input) {
  let output = input.reduce(compare, {age : 0});
  return output;
};

// Do not edit below this line
module.exports = findTheOldest;
