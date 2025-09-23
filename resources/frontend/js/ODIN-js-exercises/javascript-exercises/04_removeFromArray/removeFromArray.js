const removeFromArray = function(inputArray, ...targetItems) {
  let outputArray = [];

  
  for ( const i in inputArray ) {
    if ( inputArray[i] in targetItems === false ) {
      outputArray.push(inputArray[i]);
    }
  }
  
  return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
