/* exception handling  */
/* 1.TRY:- this statement is used to test a block of codes for errors.
   2.CATCH:- this statement is used to handle the error.
   3.THROW. this statement is ussed to create custom error.
   4.FINALLY:- this statement is used to execute code after TRY and CATCH regardless of the result.*/
   
//to handle the error
//convert error into language
/*use tryandcatch block to handle error:-
     1.first try block will always execute, when error occurs catch will execute. */


    //syntax

       /*
       try{
         //statements;
       }catch(arguments){
         //statements;
       }
       */

    //example without try block error

       /*
       try{
         console.log("Try block");
       }catch(e){
         console.log(`catch block error: ${e}`);
       }
       */

    //example with error

          /*
          try{
            variable; //variable not defined
            console.log("Try block");
          }catch(e){
            console.log(`catch block error: ${e}`);
          }
          */

    //example using error object

           /*
           try{
             variable;
            console.log("Try block"); //skip remaining statements
           }catch(e){
            console.log(`catch block error: ${e}`);
            console.log(e.message);
            console.log(e.name);
            console.log(e.stack);
           }
           */
           

    //example for executing statements after the catch block executes-using finally block

         /*
         try{
          variable;
          console.log("Try block"); //skip remaining statements
        }catch(e){
         //console.log(`catch block error: ${e}`);
          console.log(e.message);
          console.log(e.name);
          console.log(e.stack);
        }finally{
          console.log("finally executed");
        }
        */

         


       

      
