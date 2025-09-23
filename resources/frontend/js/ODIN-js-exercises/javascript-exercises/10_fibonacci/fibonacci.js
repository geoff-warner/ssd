const fibonacci = function(n) {
  let fib = 1,
    mut = 0;

  n = +n;
if ( n < 0 ) {
  return "OOPS"
} else if ( n === 0 ) {
  return 0;
} else {
  while (n > 0 ) {
    fib = fibonacci( n - 1 );
    return fib;
}






  return fib;
}
};
// 0  1  2  3  4  5  6  7   8   9   10  11  12

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

// Do not edit below this line
module.exports = fibonacci;
