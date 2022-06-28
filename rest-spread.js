/* REST and SPREAD OPERATORS */
//used in advanced JS.
//rest is used to combine the values.
//used with arrays and objects.

   //Example REST with ARRAY(...ANY)(passed in FUNCTION)
//rest operator will combile the rest of the values and gives an Array of values and we can use index to access each value from array 

     //create a function
     /*function addnumbers(a,b,c){
       return a+b+c;
     }
     //create a variable to store the result
     const result = addnumbers(2,5,6)
     console.log(result);*/

     //NOW, if we pass one or more parameters at the time of calling the function, here we use REST operator(...name) in formal parameters 
     /*function addnumbers(a,b,c,...other){
       //execute the other inside the function
       console.log(other) //prints 7,8

       //we can use index value alos to access other
      console.log(other[0]) //prints 7
       return a+b+c
     }
     const result = addnumbers(2,5,6,7,8)
     console.log(result);*/

  /*
  //Example REST with OBJECTS
  var student= {
    name:"VC", age:28, hobbies:["paly", "more"]
  }
   //const age = student.age;

   //we can use array destructuring to take out the value of age
   //const {age}=student;
   //console.log(age);
   
   //NOW we use REST  to print other
   const {age, ...rest}=student;
   console.log(rest);*/




  //Example of SPREAD with ARRAY(passed in CALLING)
  //spread operator breaks/divides the combined values

     /*
     //create a array
     var names = ["VC", "VK", "BI"];

     //create function
     function getnames(name1,name2,name3){
       console.log(name1,name2,name3);

     }
     //at the time calling just pass the ARRAY NAME(...NAMES) i.e actual parameters
     getnames(...names);
     */

  //Example of Spread with Objects

    /*
    var students={
      name:"VC", age:28, hobbies:["play","game"] 
    }

  //create one more object to change the value of age with spread operator
  var newstudents={
    ...students,
    age:"30"
  }
  console.log(newstudents);
  */


