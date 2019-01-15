const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']


// numberd[1]= 'SOMETHING'
// console.log(numbers);

//start

// console.log(numbers.shift()) //returns lost element
// console.log(numbers);
// numbers.unshift('zero')
// console.log(numbers);

//end//

// console.log("The element to be deleted is: "numbers.pop())
// console.log(numbers);
// numbers.push('Seven')
// console.log(numbers);

//middle//

numbers.splice(2, 1, 'smth')
console.log(numbers);
