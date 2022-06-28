/*const a=10;
function f(){
  if(true){
    const a=9;
    //console.log(a);
    //console.log(a);
  }
  console.log(a);
  console.log(a);
}
//console.log(a);
//console.log(a);
f();*/



/* HOW TO ACCESS OBJECTS In DIFFERENT WAYS */
const object1 = {
  a: 'somestring',
  b: 42
};
/* use this to get values */
//for(const o in object1){
  //console.log(object1[o])
//}; //prints somestring and 42

/* use this to get the keys */
//for(const o in object1){
  //console.log(o);
//} //prints a and b

/* use this to get the key value pairs */
//for (const [key, value] of Object.entries(object1)) {
 //console.log(`${key}: ${value}`);
//} //prints k:v

/* use this to get the array of key value pairs */
//console.log(Object.entries(object1)); //prints [...]

//forkeys:-
//console.log(Object.keys(object1));

//for values:-
//console.log(Object.values(object1));

/* use this to get the keys */
//for(const key of Object.keys(object1)){
  //console.log(`${key}`)
//}; //prints a and b

/* use this to get the values */
//for(const value of Object.values(object1)){
  //console.log(`${value}`)
//}; prints somestring and 42

//console.log(object1.a); //somestring
//console.log(object1.b); //42