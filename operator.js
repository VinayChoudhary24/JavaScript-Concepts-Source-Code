/* Operators
      expression result in a value.

      //Example

            1 + 2 
              Here, 1 and 2 is Operands and (+) is Operator.
              
              *Operands in Programming languages are called ARGUMENTS.*/

//1.Arithemetic Operators
           
              /* *Addition(Right to Left)
              *Substraction(Right to left)
              *division(left to right)
              *Multiplication(left to right)
              *Remainder(%)(left to right)
              *Unary Negation
                 -if y =10 then -y =-10(right to left)
              *Unary Plus
                  -if y =-10 then y =10(right to left)
              *Pre-Increment(++X) 
                   -increment value by one then evaluates to new value(right to left)
              *Post-Increment(X++)
                   -increment value by one but evaluates the value of y before increment(right to left)
              *Pre-decrement(right to left)
              *Post-decrement(right to left)*/

           //Pre and Post Increment
            
                /*let j, x =5;
                j =++x;
                console.log(j + " " + "with pre-increment");*/ //result wil be 6

                /*let j, x =5;
                j =x++;
                console.log(j + " " + "with post-increment");*/ //result will be 5.
                  
//2.Comparison Operator(Strict equality, Abstract equality and Relational)

        /*
           *less then(<)(left to right)
           *greater then(>)(left to right)
           *less then or equal to(<=)(left to right)
           *greater then or equal to(>=)(left to right)
          */
       //1.Strict equality types (refers to the same object OR they are same types OR have the same value)(===)(!==)

       //2.Abstract equality(==)(!=)(refers to the same object OR have the same value)

       //Example Strict and Abstract
      
              /*let x =10, str ="10";

              console.log(x==str); 
              //gets true

              console.log(x===str);*/ 
              //gets false because they dont have the same data types

        
        //Converting str into number:
             
              /*let x =10, str = "10";

              console.log(x===Number(str));*/

   
    //3.Logical Operators
             /*
               *AND(&&)
               *OR(||)
               *NOT(!)
              */

          //a.AND(&&)

              /*
                -used for boolean operations on two values.
                -returs true if and only if its first and second Operand are true.
              */
          
             //Example

                  /*
                  let x =10, y =10;
                  if (x===10&&y===10){
                    console.log("true");
                  }else{
                    console.log("false");
                  }*/
                  //Returs True 
                  
                  /*
                  let x =10, y =10;
                  if (x===10&&y===5){
                    console.log("true");
                  }else{
                    console.log("false");
                  }*/
                  //Returs False

          
          //b.OR(||)
               
                /*
                -performs boolean expressions on two relational values.
                -returs true if one or both operands are true.*/

            //Example
             
                 /*
                 let x =10,
                 y =10;

                 if(x===10||y===10){
                   console.log("true")
                 }else{
                   console.log("false");
                 }*/
                    //Returs True

                    /*
                    let x =10,
                    y =10;
   
                    if(x===10||y===5){
                      console.log("true")
                    }else{
                      console.log("false");
                    }*/
                      //Returs True Again

            //c.NOT(!)
               
                /*
                -Unary operator
                -it is placed before the single operand.*/

                /*
                -used to invert the boolean.
                  if X =True;
                  use ! i.e
                  !x =False;
                */

    //4. Assignment Operator(=)

           // let x =5

           /*
           -used with arithmetic addition
                  x =x+y;*/

            //Example
                
                 /*
                 let x =10,
                 y =3;
                 x +=y; //adds
                 console.log(x);*/
                  //prints 13

                  /*
                  let x =10,
                 y =3;
                 x -=y; //subtract
                 console.log(x);*/
                 //prints 7

            //for multiplication(x*=y;)

            //for division(x/=y;)

            //for remainder(x%=y;)
            
            //for AND(x&=y;)

            //for OR(x|=y;)

  //5.typeof operator(typeof)
     
          /* 7 data types:-
               1.undefined
               2.null
               3.boolean
               4.number
               5.string
               6.symbol
               7.object
          */

          //Example

              /*
              console.log(typeof 1);
                //retur number

              console.log(typeof "vc");
                //return string

              console.log(typeof null);
                //return object

              console.log(typeof true);
                //return boolean

              console.log(typeof function(){});
                //retur function
             */

  //6.Destructing assignment operator

          //Example
             
               /*
               \const obj = {a:1, b:2, c:3, e:5};

            //destructing assignment operator
                 const {a, b, c, d, e} = obj;
                
            //ptint variables
                 console.log(a);
                 console.log(b);

              //but
                  console.log(d);*/ //undefined

        //example
              
               /*
               const arry =[1, 2, 3];

          //destructing assignment
              const [a, b, ...rest] =arry;

              console.log(a);
              console.log(b);
              console.log(rest);

        //Using spread operator(...)
             console.log(rest);*/
            

//7.destructuring arguments(arguments are identifiers) 

     //example
      
        /*
        const bed ={ //declare object
         w1: "blanket",
         w2: "cusion",
         w3: "pillow"    
        };

        //create function
          
          function getdata({w1, w2, w3}){
            return `${w1} ${w2} ${w3}`;
          }
          console.log(getdata(bed));
        */
//8. Call() Method

       //example

         /*
         function magic(){
           return `welcome, to ${this.name};`
         }

         //create two objects
            const obj1 ={name: "full"};
            const obj2 ={name: "half"};

        //call function
           console.log(magic());
           //without call method..
           //prints undefined

        
          //with call method()
          console.log(magic.call(obj1));
          console.log(magic.call(obj2));
        */
         
           
             


  



               



                                

            

          







            
          
            
           
              
