let myTodo = {
  day: 'Monday',
  meetings:0,
  meetDone: 0,
}

let addMeet = function(todo, meet = 0){
  todo.meetings = todo.meetings + meet
}

let meetDone=function(todo, meet =0){
  todo.meetDone = todo.meetDone - meet
}

let resetDay = function(todo){
  todo.meetings = 0
  todo.meetDone = 0
}

let getSumOfDay = function(todo){
  let meetLeft = todo.meetings + todo.meetDone
  return `You have ${meetLeft} of meetings today`
}

addMeet(myTodo, 7)
addMeet(myTodo, 2)
meetDone(myTodo, 5)
console.log(myTodo);
console.log(getSumOfDay(myTodo));
