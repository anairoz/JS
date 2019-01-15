let myYoutubeVideo1 = {
  title: 'Loops in JS',
  videoLength: 15,
  videoCreator: 'Hitesh',
  videoDescription: 'this video video description'
}
let myYoutubeVideo2 = {
  title: 'Functions in JS',
  videoLength: 10,
  videoCreator: 'Hitesh',
  videoDescription: 'this video video description'
}
// console.log(myYoutubeVideo);
// console.log(`Hey new Video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`);
 //JScourse

 let jsCourse = {
   title: 'Javascript course',
   price: '$100',
   description: 'full online course of Javascript'
 }

 // console.log(`Hey new course "${jsCourse.title}" by ${myYoutubeVideo.videoCreator}, that costs ${jsCourse.price}. Description: ${jsCourse.description}`);

// myYoutubeVideo.title = 'ForEach loop in JS'
// console.log(`Hey new Video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`);
// console.log(myYoutubeVideo);

let changeVideoLength = function(myObject){
return {
  format1: `Time of this video is: ${myObject.videoLength +2 }`,
  format2: `Time of this video is: ${myObject.videoLength +2 }`
}
}

let add1 = changeVideoLength(myYoutubeVideo2)
console.log(add1.format1);
