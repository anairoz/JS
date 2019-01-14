// use var instead of let if we want make variable global outside the scopes
let iAmGlobal = 'someValue'
  console.log(iAmGlobal);
if (true) {
   let iAmLocal = 'someMoreValue'
  iAmGlobal = 'superman'
  console.log(iAmGlobal);
  console.log(iAmLocal);
}
console.log(iAmLocal);
console.log(iAmGlobal);
