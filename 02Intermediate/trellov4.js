// const myTodo = ['Buy Bread', 'Learn JS', 'Go to Nova Poshta']
//
// console.log(myTodo.indexOf('Learn JS'));

const newTodo = [{
  title: 'Buy Bread',
  isDone: false,
}, {
  title: 'Learn JS',
  isDone: false,
}, {
  title: 'Go to Nova Poshta',
  isDone: true,
}]

// const index = newTodo.findIndex(function(todo, ind){
//   console.log(todo);
//   return todo.title === 'Learn JS'
// })
//
// console.log(index);

//Method 1
// const findTodo = function(myTodo, title){
//   const index = myTodo.findIndex(function(todo,  index){
//     return todo.title.toLowerCase() === title.toLowerCase()
//   })
//   return myTodo[index]
// }
//
// let printMe = findTodo(newTodo, 'Go to Nova poshta')
// console.log(printMe);

//Method 2
const findTodo = function(myTodo,  title){
  const titleReturned = myTodo.find(function(todo,  index){
    return todo.title.toLowerCase() === title.toLowerCase()
  })
  return titleReturned
}

let printMe = findTodo(newTodo, 'Go to Nova poshta')
console.log(printMe);
