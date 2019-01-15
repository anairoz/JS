let getMyGrade = function(currentMarks, totalMark){
  let myPercent = (currentMarks / totalMark) * 100

  let myGrade = ''

  if (myPercent >= 88) {
    myGrade = 'A'

  }else if (myPercent >= 71) {
      myGrade = 'B'
  }else if (myPercent >= 51) {
      myGrade = 'C'
  }else {
    myGrade = 'Fail'
  }
  return `Your grade is ${myGrade} and percentage is ${myPercent}`
}

let yourResult = getMyGrade (92, 100)
console.log(yourResult);
