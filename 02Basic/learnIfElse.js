// if (false) {
//   console.log('I am inside if Block');
//   console.log('I am still inside if Block ');
// } else if (false){
//   console.log('I am inside IF CAPS BLOCK ');
//
// }else{
//   console.log('NOTICE THIS PART');
// }

var whoIsHere = ''

if (whoIsHere === 'user') {
  console.log('Greeting message  for user');
  console.log('Allow access to view all courses');
} else if (whoIsHere === 'teacher') {
  console.log('Greeting message for TEACHER');
  console.log('Allow access to view all courses');
} else {
  console.log('Message: please verify your email');
  console.log('Send user an email for verification');
}
