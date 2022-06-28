//1.Member Access(.)

     //syntax
        
          //Object.Property;
          
    //example
         /* 
         let obj ={id:"i", name:"java"};

         console.log(obj.name);

    //example
        
         console.log(obj["name"]);
         */
         
//2. in operator
       
    //example

          /*const car ={name:"audi", model:"one", year:2052};

          console.log("name" in car);*/
                //prints true


//3. Operator New

    //use to create instance of the model class
     
        //example

              /*
              class Model{
                constructor(){

                };
              };

            //creating an instance of the model class:-
                 
                 const c1 =new Model();
                
               //creating instance

                  const c2 =new Model();*/

//4.instanceof operator
    //*considers left side as object and right side as class object i.e left side is the instance of the right side.

     //example
          
            /*
            const d =new Date();

            console.log(d instanceof Date); //prints true

          //declare array

            const arry =[1,2,3];

            console.log(arry instanceof Array);

          //but

            console.log(arry instanceof Date);*/
               //prints false
              
//5. delete operator

       //example
           /* 
            const obj ={x:1, v:2, g:3};

            console.log('x' in obj); //prints true

         //delete object:-
             
            delete obj.x;
            console.log('x' in obj); //prints false

          //using array
            
            const arry =[1,2,3,4];
            console.log(arry[3]); //prints 4

          //delete element:-
            
            delete arry[3];
            console.log(arry[3]); //prints undefined
          */

//6. conditional operator(? :)

        //example
            /*
              let print ="good morning to all";

              print =print ? print:"welcome boizz"; //if expression return true then we will print "good morning to all" else print "welcome boizz".
              
              console.log(print);
            */


            


             

  


