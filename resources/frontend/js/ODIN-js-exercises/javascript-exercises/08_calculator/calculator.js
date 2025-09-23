function add( a, b ) {
	return a + b;
};

function subtract( a, b ) {
	return a - b;
};

function sum(array) {
	let sum = 0;
  for ( n of array ) {
    sum += n;
  }
  return sum;
};

function multiply(array) {
  let product = 1;
  for ( n of array ) {
    product *= n;
  }
  return product;
};

function power( a, b ) {
  let product = 1;
	for ( let i = 0; i < b; i++ ) {
    product *= a;
  }
  return product
};

function factorial( n ) {
	if ( n === 0 || n === 1 ) {
    return 1;
  } else {
    return n * factorial( n - 1 );
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
