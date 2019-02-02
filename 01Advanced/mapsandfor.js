var john = {
  name: 'I am John',
  age: 24,
  isActive: true
}

var marry = {
  name: 'I am Marry',
  age: 14,
  isActive: true
}

var sam = {
  name: 'I am Sam',
  age: 30,
  isActive: false
}

let users = new Map ()

users.set('john', john)
users.set('marry', marry)
users.set('sam', sam)

// console.log(users.size);
//
//
// // console.log(users.get('sam'));
// console.log(users.values());
//
// for (value of users.values()) {
// console.log(value);
// }
//
// for ([key, value] of users.entries()) {
//   console.log(key + ' = ' + value.name);
//   //convert the above line in literals
// }

// users.forEach((value, key) =>   console.log(key + ' = ' + value.name))

var arrofArr = [['one,', '1'],['two,', '2'], ['three,', '3']]
var newMap = new Map(arrofArr)
console.log(newMap);
