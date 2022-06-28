/* variable scope */

   //Example

       //declare function

         /*
         function f(x){
           return x/2;
         }

         //call

         console.log(f(10)); //calling function

         console.log(x);
         */ //ERROR:- cannot access argument outside the funtion body

    
   /* Lexical scope */
 
   //Example
     
       /*
       function f1(){
         console.log("function one");
       }

       function f2(){
         console.log("function two");
       }

       function f3(){
         console.log("function third");
       }

       f2();
       f1();
       f3();
       */


    //Example

    //declare variable outside function  
    
    /*
    const x=5;

    //declare function
    function f(){
      console.log(x);
      console.log(y)
    }

    //declare another variable outside funtion
    const y=4;

    //call function
    f(); //will work
    */
    

    //we cannot declare variable after the funtion call in lexical scope baby..


  /* Global and Block Scope */

    /* Global */ //anything declared before function call is in GLOBAL.

    //Example (ALWAYS DECLARE GLOBAL VARIABLES WITH OBJECT FOR BETTER PROGRAMMING)

    /*
    let name="daily";
    let subs=4000;
    // this is a bad practice to declare global variable
    */ 

    //declare global variables using object
    /* 
    const user={
       name:"daily", 
       subs:4000
     }

    //declare two function
    function show(){
      console.log(`${user.name} you have ${user.subs} subscribers`);
    }

    function make(){
      console.log(`thank you so much ${user.subs} subscribers`);
    }

    show();
    make();
    */


  /* Block scoping */
  //surrounded by curly braces{}, part of if, else etc..


     //Example

         /*
         console.log("block start...");
         {
           console.log("inside block");
           const x = 5;
           console.log(x);
         }
         console.log("block end");
         console.log(`outside of the block: x=${x}`); //cannot access x outside the block.
         */

  


    



















       


























