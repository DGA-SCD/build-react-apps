function fizzBuzz(number) {
  if (number % 3 === 0 ) {
    var result = 'Fizz'
  }

  if (number % 5 === 0) {
    result = result + 'Buzz'
  }

  return result
}

number = 30
console.log('Number: ' + number + ' Result: ' + fizzBuzz(number))
