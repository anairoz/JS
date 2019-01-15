const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat','Sun']

console.log(days[0]);



days.forEach(function (day, num){
  console.log(`starts with ${num+1} --${day}`);
})
