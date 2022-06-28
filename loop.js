// Loops(while, do while, for, for of, for each and for in)(iterate elements in the array)
  //1.while loop:- block of codes to be executed once
     
      /*while(expression){ 
        statement1;
        statement2;
      }*/
    //Example
      
       /*let count = 0;

       while(count<10){
         console.log(count); //print
         count++; //increase
         //count = count + 1; same statement
       }*/

  //2.Do while loop(*block of codes executes atleast one time)
      //syntax
        
        /*do{
          statement1;
          statement2;
        } while(expression);*/

      //Example
        
         /*let count = 0;

         do{
           console.log(count); //print
           count++; //increase
         } while(count<5);*/ 

  //3. For loop
        //syntax
            /*for(initialization;Expression;increment/decrement)
            statement;*/ //statement is executed only when the value of expression is true. 
        //Example
            /*for(let count = 0;count<5;count++)
            console.log("number:" + count);*/

        //*Execution Pattern
             /*1.initialize variable and specify value.
             2.evaluate expression
             3.execute statement.
             4.execute increment or decrement operators.*/

        //Example(multiple variables and expressions)
            
             /*for(let i=0,j=5;i<5;i++, j--){
              console.log(i + " and " + j); 
              //console.log(i + " " + "and" + " " + j);
             }*/     //print i and j

    //4.Nested for loop(helpful in multi-dimensional array)
          
       //Example
         
              /*for(let i=1; i<4; i++) //outer loop
              {
                for(let k=1; k<4; k++) //inner loop
                {
                  console.log(i + "," + k);
                }
                //console.log("\n");
              }*/
                //execution
                   /*1.i=1
                       k=1 inner loop executes again and increase k value, now
                       i=1
                       k=2 so on...till k=3.
                    2. i=2
                       k=1..so on...*/

    //5.For in loop(depends on for loop)(iterates with object data types)(returns keys)
          //syntax
              
              /*for(variable in object){
                  Statement;
              }*/

          //Example

               /*const obj = {
                 a:1, b:2, c:3, d:4
               };
                for(let o in obj){
                  console.log(obj[o]); //print object(1,2,3,4) properties values
                };*/
              

    //6.for of loop(only with Array objects)(iterates)

               //syntax
                  
                   /*for(variable of object)
                   statement;*/

          //Example
              
                  /*let arry = [1,2,3,4,5];
                  for(let value of arry){
                    console.log(value);
                  }*/
                    //*Difference between For of and For in loop:-For of loop prints the elements of the array/string and For in loop prints the Index of the array

              //example for string
                 
                   /*let str ="learning JS"
                   for(let value of str){
                    console.log(value);}*/
     
               /* difference between For of and For in loop

          
    //7. for each loop:- calls a function for each element in an array.
               
               For..of loop:- does use iterable objects and loop over generated values

               For...in loop:- loop over enumerable properties*/



                      
           
