/* jump statements */

    //jump statements are used to jump the execution to the new location.

    /* 1.break */
      
       //syntax
            
          //break;

          //example

              
              for(let i=1; i<=5; i++){
                if (i==3) break; //break statement when i become 3.
                //continue; (will break at 3 and start again till 5)
                console.log(i);
              }
              

      //2. continue(will execute the whole loop without terminating the loop) 

          //syntax
            
               //continue;

               //continue labelname;

      //example

             /*
             let x=0;
             while(x<10){
               x++; //increase the value of 1 by post increment.
               if(x==5){
                 continue; //continue will skip the rest of the code(skip 5 on console) 
               }
               console.log(x);
             }
            */

       //3. return statement

             //syntax

               //return expression;

            //example

                /*
                function add(x){
                  return x+x;
                }

                console.log(add(3));
                */


/* labeled statements */

      //syntax
        
         //identifier:statement;

      //example

           /*
           let a=1;

        //creating label

           label:while(a==1){
             console.log(a);//prints one infinite times.
             break label; //breaks the loop execution and prints 1.
           }
           */
        
          
