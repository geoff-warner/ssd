function fizzBuzz() {
  let i = 1;

  num = Number(prompt('Enter a number: '));

  while (i <= num) {
    let output = ''

    if (i % 3 === 0) {
      output += 'fizz';
      if (i % 5 === 0) { 
        output += 'buzz';
        }
    }

    else if (i % 5 === 0) { 
        output += 'buzz';
    }

    else {
        output = i;
    }
    
    i++;
    console.log(`${output}`);
  } 
}
fizzBuzz();
