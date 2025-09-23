const reverseString = function(input) {
  let string = input,
    rev = '',
    chars = string.split("");

  while ( chars.length > 0 ) {
    let removed = chars.pop();
    rev += removed;
  } 
  return rev;
}

// Do not edit below this line
module.exports = reverseString;
