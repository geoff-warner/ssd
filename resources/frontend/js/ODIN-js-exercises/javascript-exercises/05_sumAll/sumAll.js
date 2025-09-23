function testSuitable(value) {
  return (typeof(value) === "number" && value > 0 && Number.isInteger(value));
}

function sumAll(a, b) {
  let sum = 0;
  let start = 0, 
  fin = 0;
  if ( !(testSuitable(a) && testSuitable(b)) ) {
    return "ERROR"
  } else {
    if ( a > b ) {
      start = b,
        fin = a;
    } else if ( a < b ) {
      start = a,
        fin = b;
    } else { start, fin = a };

    for ( let i = start; i <= fin; i++ ) {
      sum += i;
    } 
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
