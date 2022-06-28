// variables 

  // create a variable
   // age = 28;


  // declare a variable
   /*let firstname, lastname = "vinay choudhary", age = 28;

   console.log(firstname);
   console.log(lastname);
   console.log(age);*/

//---------------------------

//constant (use capital letters for const)
   // create a constant

   /*const TEMP = 124;
   const NAME = "vc"

   console.log(TEMP);
   console.log(NAME);*/

//-----------------------

//identifiers 
   //-- letters, numbers, underscore(_) and dollar sign($).

//------------------------------

//literals
   // create a let

   /*let goal = "leran javascript"; 
   console.log(goal);*/

   // specify/refer let to other variables
   /*let goal = "leran javascript";

    let reference = goal;
   console.log(reference);*/

//---------------------------

//.Primitive data types(Strings, Boolean, Number, Null, Symbols, bigints, Undefined)
   // not changeable, no modification
   // replace the old value
   /*let age = 28;

   age = "hello" + "  " + "JS";

   console.log(age);*/

//1.Strings------------------------

     /*let text = "this is a string";
     console.log(text);*/

   //A*Escaping Method

       //let str = "we took bag from him, he said \' don \'t touch my bag\'";

       //examples:-
       /*\n - newline
         \r - carriage return
         \t - tab 
         \' and \" - single and double quote
         \` - backtick
         \$ - dollar sign
         \\ - backslash
         \\uXXXX - unicode format*/
   
   //B*String Concatenation
        /*let temp = 20;
        let str = "weather of india is" + "  " + temp + "\u00b0c";

        console.log(str);*/

//--------------------------------

//2.Boolean - value types
   // 1.true 2.false

   //create a boolean

   /*let Do = true;
   let more = false;
   console.log(Do);
   console.log(more);*/

//------------------------------

//3. Symbols - unique tokens

   //create  a symbol(using constructor)

   /*const blue = symbol();
   const white = symbol("color white");

   blue === white; //false/error
   */
//---------------------------------

//4. Null and Undefined - special types

   //example

   /*let myvalue;
   console.log(myvalue); //undefined
   console.log(typeof myvalue); 
   console.log(typeof undefined);*/

   /*
   let myvalue = null;
   //myvalue = null; //null
   //myvalue = 19.4;
   console.log(myvalue);
   console.log(typeof myvalue);
   console.log(typeof null); */
   

//-----------------------------------

//.Object data types(array, date, regular expression, map and weakmap, set and weakset)
   // takes multiple value
    // works like container
    // syntax = {}

    //create object
       //const obj = {};

    //object example

       /*const obj = {};

       obj.age = 28;
       console.log(obj.age);*/

    //example with properties
       /*const obj = {
       name: "vinay", //key=name, value="vinay"
       age: 28 //key=age, value=28
    };

       console.log(obj.age);
       console.log(obj.name);*/


  // deleting property

     /*const obj = {
       name: "vinay", //key=name, value="vinay"
       age: 28 //key=age, value=28
     };

       delete obj.age;
       console.log(obj.age);*/

//1. Array -different data types
   
    //array is zero index.
    //syntax = []

    //create a array
      
       /*const a1 = [1,2,3,4,5,6]; //numbers array
       const a2 = [1,2,null,5,"full"]; // mixed array
       const a3 = ["hii", "bye"]; // string array
       const a4 = [
         [1,2,3],
         [456],
       ]; //array within array

       console.log(a1.length);*/ //access array length
      
    //access array with index value

       /*const a1 = [1,2,3,4,5,6]; //numbers array
       const a2 = [1,2,null,5,"full"]; // mixed array
       const a3 = ["hii", "bye"]; // string array
       const a4 = [
         [1,2,3],
         [456],
       ]; //array within array

       console.log(a1[1]);*/ //a1[1] = first index value(2)

   //Change array elemnet
       
        /*
        const a1 = [1,2,3,4,5,6]; //numbers array
        const a2 = [1,2,null,5,"full"]; // mixed array
        const a3 = ["hii", "bye"]; // string array
        const a4 = [
         [1,2,3],
         [456],
        ]; //array within array

        a1[1] = 7;
        a3[0] = 10;

        console.log(a1[1]);
        console.log(a1);
        console.log(a3[0]);
        console.log(a3);
        */

//2. Date - date and time
   //set date and time

   //create date object
      
      /*const now = new Date();

      console.log(now);*/

  //specify date to a particular identifier
       
       /*const dt = new date(2021,3,22);

       console.log(dt);*/

//3.Regular expression -sub language of JS
      //perform complex search and replce operations

//4.Maps and sets 

     //create a map

        //const roles = new Map();

     //assign roles to the user
        /*roles.set(t1,"user1");
          roles.set(t2,"user2");*/

//5. set and weaksets
     
      //create a set
        //const roles = new set();

      //specify role to the user 
        //roles.add("user1");


    
        const x = BigInt(Number.MAX_SAFE_INTEGER);
        9007199254740991n
        > x + 1n === x + 2n; // 9007199254740992n === 9007199254740993n
        false
        console.log(typeof x);
        console.log(x);   






    




























    



     

    
































