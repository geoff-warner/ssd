const palindromes = function (string) {
  const regex = /[^a-z\d]/gi;
  let test = string.toLowerCase().replace( regex, '' )

  while (test.length > 0) {
    if ( test.at(0) === test.at(-1) ) {
      test = test.slice(1, -1)
    } else return false;
  } return true;

};

// Do not edit below this line
module.exports = palindromes;
