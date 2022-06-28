/* function */ //parameters are optional
//functions are a block of codes designed to perform a particular task.

    //syntax

        /*function funname(arg, ..., arg){
          statements;
        }*/

    //example
     
      /*
      function mahol(){
        console.log("ho");
        console.log("gaya");
      }

      mahol();*/ //call function

   //example with return

      /*
      function mahola(){
        return "ho gaya";
      }

      console.log(mahola);
       //prints Function: mahola because referencing to the function and will not execute the body of the function.
      console.log(mahola());
      */

  //example with return and ()

      /*
      function mahola(){
        return "ho jayega";
      }
      console.log(mahola());*/
      //prints ho jayega

  //example

       /*
       function mahola(){
       return "ho jayega";
       }

       //assigning reference to the variable
        let f =mahola;
        console.log(f());

      //using object with property
        const obj ={f:"mahola"};
        console.log(obj.f);
        */
        

/* Arguments and default argumnets */
    //arguments = parameters
    //pass information to the function 

       //example 

         /*
         function demo(a,b){
      //a and b are formal arguments/parameters
           return (a+b)/2;
         }
         console.log(demo(5,66));
         */  //5,66 becomes actual parameters

    /* Default value for arguments */

       //example
        
          /*
          function f(x){
            return `in function:x=${x}`;
          }
          console.log(f());
        //prints undefined
      
       //example

           function f(x="default"){
           return `in function:x=${x} `;
          }
           console.log(f());
          //prints default, default

       //example

           function f(x=33){
          return `in function:x=${x}  `;
          }
           console.log(f());
        */
          //prints 33, 33, 33

         
/* Anonymous function */
 
      //identifiers(name) are not neccessary

      //declare function as an expression

         //example

          /*
          const f =function(){
            //statements
          }
          f();
          */

        //example(why to use anonymous function)

          /*
          const o ={
            name: "anonymous function",
            //invoke is the method
            invoke(){
              return "who are you?"
            }
          };
          console.log(o.invoke());
          console.log(o);
          console.log(o.name);
          */
          
          


             

    

 
          
      