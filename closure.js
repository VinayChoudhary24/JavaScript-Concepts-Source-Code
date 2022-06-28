/*  closure   */
//function inside another function.
//use return keyword.
//values are retained in closure and not get lost
//use of lexical scope

  //Example:-
  /*var sum=function(a){
    console.log("hello "+a);
    var c=4;
    return function(b){
      return a+b+c;
    }
  }
  //create a variable to store return
  var store=sum(2); //jo function sum function ne diya h wo store kiya h STORE m h
  console.log(store(5)); //CLOSURE PROCESS:- when we called var store=sum(2) it reaches to var sum function and we get hello 2, now we call console.log(store(5)) which goes inside the sum function to the RETURN function and give b=5 and it also access the A=2 and C=4 in return of the RETURN function(because in CLOSURE VALUES ARE RETAINED EVEN WHEN WE CALL TWO FUNCTIONS, FUNCTION INSIDE ANOTHER FUNCTION)*/


//EXAMPLE (MAIN FUNCTION RETURNS TWO MORE FUNCTION)
  
  /*
  //create parent function
    var sum= function(a,b,c){
       
      return { //Use curly braces beacuse child function should be inside the parent function
  //first child function returns sum of two 
        getSumTwo:function(){
          return a+b;
        }, 
  //second child function returns sum of three
        getSumThree:function(){
          return a+b+c;
       }
     }
    }
 //create variable to store result
  var store=sum(3,4,5);
  //now call both the functions
  console.log(store.getSumTwo())
  console.log(store.getSumThree())
//now if call all again with different store1 variable it will return the new variable values and override the old one(store) variavle i.e beauty of closure 
  var store1=sum(6,7,8);
  //now call both the functions
  console.log(store1.getSumTwo())
  console.log(store1.getSumThree())
  */
    


 
    //Example

       /*
       //declare outer function
       function Counter(){
         let count=0; //cant access this variable outside of the function
         return function(){
           return count++; //has access to the count variable outside of the function
         };
       }
       //reference of the function
       let calculate = Counter();

       console.log(calculate());
       console.log(calculate());
       */


   //Example

      /*
      let closure;
      {
        let block = "character";
 
        closure = function(){
          console.log(block);
        };
      }

      //access block variable outside of the block
      //console.log(block); //Error

      closure(); //call function
      // now we can access block variable outside of  the block
      */

   //Example with object
   //using Arrow function()=> as a closure.

        /*
        let f;
        {
          //declare object
          let obj ={
            name: "peter",
            behaviour: "aggressive"};
            //cannot access outside of the block

            //using arrow function
            f=()=>{
              return obj;
            };
        }
        console.log(f()); // prints function
        //create reference of the arrow function to the object
        let ref=f(); //create reference of the object
        console.log(ref.name);
        */
        
        

      

      
