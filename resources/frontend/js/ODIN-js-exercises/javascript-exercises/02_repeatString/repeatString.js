const repeatString = function(entry_string, entry_n) {
  let string = `${entry_string}`,
    n = entry_n,
    output = '';
  if ( n >= 0 ) { 
    for ( let i = 0; i < n; i++ ) {
      output += string;
    }
    return output;
  } else {
    return 'ERROR'
  }
}

// Do not edit below this line
module.exports = repeatString;
