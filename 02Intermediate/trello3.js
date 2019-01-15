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

}


myTodo.addMeeting(6)
myTodo.hendleMeeting(3)
console.log(myTodo.summary())

// Assigntment
//Hendle meetDone
// create reset entire resetDay
