// const sayHello = function(name){
//   return "Hey there, "+name+"!"
// }
// console.log(sayHello('Zorik'));

const sayHello = (name) => `Hey there ${name}`

// console.log(sayHello('Zorik'));


const todo  = [{
  title: 'Eat',
  isDone: true,
}, {
  title: 'Go',
  isDone: true,
}, {
  title: 'Sleep',
  isDone: false,
}]

const thingDone = todo.filter ( function(todo) {
  return todo.isDone === true

})
// const thingDone = todo.filter((todo) => todo.isDone === true)

// console.log(thingDone);

//створити туду на 6 елементів, три тру, три фолс. вивести не готові туду і вивести тільки тайтли

const cameras = {
  price: 600,
  weight: 200,
  myDes: () => {
    return `This Nikon camera is of ${this.price}$`
  }
}

console.log(cameras.myDes());
