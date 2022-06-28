/*  immediately invoked function expression */

//it can pass to any other variable.
//anything inside it has its own scope.
//can be used with anonymous function.


  //Syntax:-
    
     /*
     (function(){
       //body
     })();
      */ 
     (function(){

     })()

  //Example
    //declare anonymous function
      
      /*
      let str="iife";
      const f =(function(){
       //let str="iife";
       return str; 
      })();

      //call function

      console.log(f);
      */
      

  //Example

     /*
     //iife using closure
     const f=(function(){
       let count = 1;
       return function(){
         return `value of count:${count++}`;
       }
     })();

     console.log(f());
     console.log(f());
     console.log(f());
     */
    

