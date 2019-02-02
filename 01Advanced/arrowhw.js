//створити туду на 6 елементів, три тру, три фолс. вивести не готові туду і вивести тільки тайтли
const myTodo = [{
  title: 'Wake up',
  isDone: true,
}, {
  title: 'Wash face',
  isDone: false,
}, {
  title: 'Breathe',
  isDone: true,
}, {
  title: 'Drink grass',
  isDone: true,
}, {
  title: 'Open the window',
  isDone: false,
}, {
  title: 'Learn JS',
  isDone: false,
}]

const notDone = myTodo.filter ((todo) => todo.isDone === false)
console.log('Not done: ');
notDone.filter((todo) => console.log(todo.title))
// console.log(notDone)
