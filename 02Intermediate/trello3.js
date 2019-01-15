let myTodo = {
  day: 'Monday',
  meetings:0,
  meetDone: 0,

  addMeeting: function(n){
    this.meetings = this.meetings+n
  },

  hendleMeeting: function(n){
    this.meetDone = this.meetDone + n
  },

  summary: function(){
  this.meetings = this.meetings - this.meetDone
    return `You have ${this.meetings} meetings today!`
  },
  resetDay: function(){
    this.meetings = 0
    this.meetDone = 0
  }
}


myTodo.addMeeting(6)
myTodo.hendleMeeting(3)
console.log(myTodo.summary())
myTodo.resetDay()
console.log(myTodo.summary())
// Assigntment
//Hendle meetDone
// create reset entire resetDay
