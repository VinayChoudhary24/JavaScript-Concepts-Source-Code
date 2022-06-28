 //control/conditional statements(decision statements)(if, else, else if, switch)
   
    //1.syntax for if

      /*if(expression) //true or false
         statement;  //executes if true

      else
         statement2;*/ //executes when if is false

    //Example
     
      /* let time = 9;
       if(time<12)
          console.log("good");*/

          /*let time = 15;
          if(time<12)
             console.log("good");
          else
            console.log("nice");*/

   //Example with compound statements
      //systax = {}

      /*let time = 1;
      if(time<12){
        console.log("good")
        console.log("morning");
      }
      else
        console.log("nice");*/

  //2.Nested if and else(ladder) 
     
       /*let time = 9;
       if(time<12){
        console.log("good");
        console.log("morning");
       if(time === 9)
        console.log("time to take break");
      }
       else
        console.log("nice");*/

  //nested if, else and else if(ladder)
        
        /*let time = 19;
        if(time<12){
         console.log("good");
         console.log("morning");
        }
        else if(time<17){
         console.log("nice");
        }
        else{
         console.log("great");
        }*/
  
  //3.Switch statements(multiple statements with single expression)
      
     //syntax
        
        /*switch(expression){
          case value:
            //executed  when the result of the value matches value
           [break];
          case value1:
            //executed when the result of the value matches value1
            [break];
          case valueN:
            //executed when the result of the value matches valueN
            [break];
          default:
            //executed when none of the value matches
        }*/
    
         /*
           for example
           1. which labguage do you choose?
           a.JS           b.python
           c.php          d.asp.net
          */
         //let ans = 1; //selected answer
         
         /*switch(ans){
           case 1:
             console.log("you have selected JS");
             break;
           case 2:
             console.log("you have selected python");
             break;
           case 3:
             console.log("you have selected php");
             break;
           case 4:
             console.log("you have selected asp.net");
             break;
           default: 
             console.log("sorry, wrong answer");
             break;
         }*/
  
          
         
            
               

  
     

  
     