let userEmail = 'Lcd123 '
let password = '1234'

console.log(password.length);
console.log(userEmail.toUpperCase());
console.log(userEmail.trim());

let userChecker = function(myString){
  if ((myString.includes(123)) && (myString.length > 6 ) ) {
    return true
  }else {
    return false
  }
}
console.log(userChecker(userEmail));
let passChecker = function(pass){
  if ((pass.includes(1238)) && (pass.length > 8 ) ) {
    return true

}
console.log(passChecker(password));
