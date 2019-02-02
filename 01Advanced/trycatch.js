const  convertToHry = (dollar) => {
  if (typeof dollar === 'number'){
    return dollar * 24
  }
  else {
    throw Error ('Amount needs to be in numbers')
  }
}
const myValue = convertToHry('five')
console.log(myValue);
// try {
//   const myValue = convertToHry('five')
//   console.log(myValue);
//
// } catch (error) {
//   console.log(error);
// }

console.log('I will not run if program crashes');
