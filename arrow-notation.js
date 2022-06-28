/* arrow notation(()=>{}) */

   //always anonymous

   //three way syntax:-
   
    /*
     1.you can omit the function keyword.

     2.if a single parameter then you can omit the parentheses.

     3.if single statement then you can omit the curly Braces.
    */ 
     
       //example

        /*
        const f1 =function(){
          return "hey mumbai"
        };
        console.log(f1());

        //Using Arrow-notation:-

        const f2 =()=> "hey mumbai";
        console.log(f2());

        //Using argument:-

          const f3 =function(arg){
            return `value of arg:$[arg]`
          };
          console.log(f3());

      //using arrow with argument:-

         const f4 =arg=>`value of the arg:$[arg]`;
         console.log(f4());
        */

      //Using two arguments:-

         /*
         const f1 =function(arg, arg1){
           return arg * arg1;
         }
         console.log(f1());

      //Using two arguments with arrow:-

         const f2 =(arg, arg1)=>  arg * arg1;
         console.log(f2());
        */

         
