/* apply, call and bind */

//purpose of call()(FUNCTION BORROWING)
//problem statement:-

  /*
  //create object
  let userdetails={
    name:"VC", age:33,
    pro:"AE",
  //create a function which will print details 
  printdetails: function(){
    console.log(this.name) //we use this keyword to point the objects and objects properties
  }
  }
  userdetails.printdetails();

  let userdetails2={
    name:"CC", age:23,
    pro:"AEE",
}
//here, the purpose of both the functions is same i.e printing out the names so now we use call() to point the first function printdetails to the second function details
//call userdetails with call()
userdetails.printdetails.call(userdetails2); //here because of this line the console.log(this.name) points towards the both functions name property(FUNCTION BORROWING)*/

  //Example for call

  /*let userdetails={
    name:"VC", age:33,
    pro:"AE",
  //create a function which will print details 
  }

  //create a function which will printdetails for both the functions, this function is outside of the other functions
  printdetails= function(){
    console.log(this.name) //we use this keyword to point the objects and objects properties
  }
  //call the call() method here
  printdetails.call(userdetails);

  let userdetails2={
    name:"CC", age:23,
    pro:"AEE",
}
printdetails.call(userdetails2);*/

 //Example:-
 /*let userdetails={
  name:"VC", age:33,
  pro:"AE", 
}
//For new parameter passed(DELHI and UDAIPUR) put STATE in function and this 
printdetails= function(state,country){
  console.log(this.name+ " " + state+" " +country) //we use this keyword to point the objects and objects properties
}
//call the call() method here
printdetails.call(userdetails, "Udaipur","india"); //pass the new para.. here

let userdetails2={
  name:"CC", age:23,
  pro:"AEE",
}
printdetails.call(userdetails2, "Delhi","india");*/ //pass the new parameter here


//Purpose of Apply:-
//if sometimes we want pass a new parameter we use apply method
//just put APPLY() in the place of CALL()

   //Example(call() and apply() are the same only with slight difference for APPLY() PASS ALL THE NEW PARAMETERS IN ARRAY LIST.\ instead of passing one-by-one.

   /*let userdetails={
    name:"VC", age:33,
    pro:"AE", 
  }
  //For new parameter passed(DELHI and UDAIPUR) put STATE and for (india) put country in function and this 
  printdetails= function(state,country){
    console.log(this.name+ " " + state+" " +country) //we use this keyword to point the objects and objects properties
  }
  //call the APPLY() method here
  printdetails.apply(userdetails, ["Udaipur","india"]); //pass the new para.. here

  let userdetails2={
    name:"CC", age:23,
    pro:"AEE",
}
printdetails.apply(userdetails2, ["Delhi","india"]);*/ //pass the new parameter here


//Purpose of BIND():-it is similar to the call() but in BIND() we don't call the function directly(printdetails.call(userdetails,"delhi","india")), instead make a COPY of that function and INVOKE/call it whenever need.
//USE LET NEWFUN=PRINTDETAILS.BIND(USERDETAILS,"DELHI","INDIA") and console.log(newfun())

  //Example:-

  let userdetails={
    name:"VC", age:33,
    pro:"AE", 
  }
  //For new parameter passed(DELHI,Udaipur) put STATE and (india) put country in function and this 
  printdetails= function(state,country){
    console.log(this.name+ " " + state+" " +country) //we use this keyword to point the objects and objects properties
  }
  //call the BIND() method here
  /*let newfun= printdetails.bind(userdetails, ["Udaipur","india"]); //pass the new para.. here
  console.log(newfun());*/

  let userdetails2={
    name:"CC", age:23,
    pro:"AEE", 
}
//do the same here for BIND()
let myfun= printdetails.bind(userdetails, "Delhi","india");
console.log(myfun());
























