// function fizzBuzz(number) {
//   if (number % 3 === 0 ) {
//     var result = 'Fizz'
//   }
//
//   if (number % 5 === 0) {
//     result = result + 'Buzz'
//   }
//
//   return result
// }
//
// number = 30
// console.log('Number: ' + number + ' Result: ' + fizzBuzz(number))

const fizzBuzz = (number) => {
  let result
  if (number % 3 === 0) {
    result = 'fizz'
  }

  if (number % 5 === 0) {
    result = `${result}buzz`
  }
  return result
}
const number = 30
console.log(`Number: ${number} Result: ${fizzBuzz(number)}`)
