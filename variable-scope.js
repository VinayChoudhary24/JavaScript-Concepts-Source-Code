// Defining Variables:-
 /*let and var is used to declare variables. Const is used to declare a Constant:-- let name="Jack";
             varage="35";
             const earn=1000; */
//---------------------------------------------------
//Naming Convention:--
  /*ALLOWED:-
  -let userName(camelCase)
  -let cric24(only letters & digits)
  -let $special(starting with $)
  -let _internalValue(starting with _allowed) */

  /*NOT ALLOWED:--
  -let user_name(Bad Practice)
  -let 21Players(starting with Numbers)
  -let user-b(special characters not allowed)
  -let let */

//------------------------------------------------
//Variable Declarationn and Variable Initialization
  
/*
var msg;
msg="Hello JavaScript!";// assigned a string value
console.log(msg);// access a variable

//the following declares and assign a numeric value
var num=100;
var hundred=num;// assigned a variable to varible
console.log(hundred);
console.log(num);
*/

/*
let msg;
msg="Hello JavaScript!";// assigned a string value
console.log(msg);// access a variable

//the following declares and assign a numeric value
let num=100;
let hundred=num;// assigned a variable to varible
console.log(hundred);
console.log(num);
*/

/*
 const msg; //Only Declared and not initialized(Error)
 msg="Hello JavaScript!";// assigned a string value(it will not take this value)
 console.log(msg);// Cannot access a variable

//the following declares and assign a numeric value
const num=100;
const hundred=num;// assigned a variable to varible
console.log(hundred);
console.log(num);
*/

//---------------------------------------
//ARITHEMATIC OPERATORS

//1. + [Add Two Numbers](right to left)
 let a=5, b=5;
 console.log(a + b);


//2. - [Subtract two Numbers](right to left)
 let a=5, b=5;
 console.log(a - b);

//3. * [Multiply two numbers](left to right)
 let a=5, b=5;
  console.log(a * b);


//4. / [divide two numbers](left to right)
 let a=5, b=5;
 console.log(a / b);


//5. % [divide two numbers and gives remainder](left to right)
 let a=5, b=5;
  console.log(a % b);


//6. ** [exponentiation] (2 ** 3 =8)
 let a=5, b=5;
  console.log(a ** b);


//7. = [Assign Value]


//8. += [perform addition and re-Assign Value]
 let a=5, b=6; 
 console.log(a += b);


//9. -= [Perform Substraction and re-Assign value]
 let a=5, b=5;
 console.log(a -= b);


//10 ++ [Increment and re-assign]
//POST-INCREMENT
let a=5;
console.log(a++); //5, Because it will increment the value by One but Evaluates/Assign the Value Before Increment

//PRE-INCREMENT
let b=5;
console.log(++b); //6, Because it will increment the value by one and Evaluates/Assign the NEW VAlUE.


//11. -- [Decrement And re-Assign]
 let a =5;
 console.log(a--); //5, Because it will decrement the value by One but Evaluates/Assign the Value Before decrement
 console.log(a--); //4

 let a =5;
 console.log(--a); //4, Because it will decrement the value by One and Evaluates/Assign the Value after decrement
 console.log(--a); //3

//--------------------------------------------------
 //Number and String
  let saving = 300;

  console.log(`Hello CK. You have net worth of $${saving}`);
  console.log('Hello CK. You have net worth of $'+saving+'')
  console.log("Hello CK. You have net worth of $"+saving+"")

//ESCAPE Characters
// --\n = new Line
// --\t = Horizontal Tabulator
// --\' = Single Quote
// --\" = Double Quote

//------------------------------------------------
//ARRAY
 let arr= [1,2,3,4,5];
 let age=30;
 let arr1= ["ck",2,arr, ["a","b"],age];
 console.log(arr1[0]);
 console.log(arr1[3][0]);
 console.log(arr1[2][4]);

//------------------------------------------------------------
 //OBJECTS
  let obj= {name:"CK",
  age:30,
  nationality:"Indian",};

  console.log(obj);
  console.log(obj.name);
  console.log(obj["nationality"]);

//----------------------------------------------------------
/*
let name='2';
console.log(parseInt(name)+2); //4, Adds the Numbers-- parseInt converts string into Numbers
console.log(name+2); //22, it takes '2' as a string
*/

//-------------------------------------------------------
 //Function
//   function add(a, b) {
//   let result = a + b;
//   return result;
//  }

//  add(3, 4);

//-------------------------------------------------------------
//  function add(a, b) {
//   const results = a + b;
//   return results;  
//  }


//--------------------------------------------------------
 //typeof Operator

 function getMessage() {
   console.log("this is test message");
   return 5;
 }

 let arr= [1,2,3,4];
 let obj= {name:"CK",
 age:30,
 nationality:"Indian",};

 let age= 30;
 let myName="CK";

 console.log("Type of UNDEFINED :"+ typeofundefined); //it will not work, it is not in BRACKET.. 
 console.log("Type of NULL :"+ typeof(null));
 console.log("Type of NaN :"+ typeof(NaN));
 console.log("Type of Function :"+ typeof(getName));
 console.log("Type of Array :"+ typeof(arr));
 console.log("Type of Object :"+ typeof(obj));
 console.log("Type of Number :"+ typeof(age));
 console.log("Type of String :"+ typeof(name));
 console.log("Type of Boolean :"+ typeof(myName=="CK"));
 console.log(typeof(nationality));
 console.log("Type of Function: " + typeof(Function));

 arr =[12,44,55,3,552,]
 console.log(arr[1]);
 console.log(typeof(arr));

 console.log(typeof(Null));       //object
 console.log(typeof(arr));          //object
 console.log(typeof ("John"))              // Returns "string"
 console.log(typeof (3.14))                // Returns "number"
 console.log(typeof (NaN))                 // Returns "number"
 console.log(typeof (false))                  // Returns "boolean"
 console.log(typeof ([1,2,3,4]))              // Returns "object"
 console.log(typeof ({name:'John', age:34}))  // Returns "object"
 console.log(typeof (new Date()))             // Returns "object"
 console.log(typeof (function () {}))         // Returns "function"
 console.log(typeof (myCar))                  // Returns "undefined" *
 console.log(typeof (null))                   // Returns "object"

//--------------------------------------------------------------
 //UNDEFINED:- Default value of uninitialized variables

 //NULL:- never assumed by default 

 //NaN:- result of invalid calculations


//------------------------------------------------------
 //Array
  const arr1= [1,2,3];
  console.log(arr1);

  const arr2 = new Array(5);
  console.log(arr2);

  const arr3 = Array(5);
  console.log(arr3);


//----------------------------------------------------------
//  //Array Operations(push, pop, shift, unshift)
  const hobbies= ["Sports","Cooking"];
  console.log(hobbies.push("Reading")); // add element at the end of the array
  console.log(hobbies);
  console.log(hobbies.unshift("Coding")); // add at the begining of the array
  console.log(hobbies);
  const poppedValue=hobbies.pop(); // Remove from the end of the array
  console.log(poppedValue); //and returns the remvoed element
  let removedEle = hobbies.shift(); // Remove fromthe beginning of the arrray
  console.log(removedEle);
  console.log(hobbies);

//-------------------------------------------------------------
 //SPLICE() METHOD

  const hobbies= ["Sports","Cooking"];
  console.log(hobbies.splice(0,0,1,"one"));
  console.log(hobbies);
  let val=hobbies.splice(0,0,"singing");
  console.log(val);
  console.log(hobbies);
  const removedElements=hobbies.splice(-2,2,"running");
  console.log(hobbies);
  console.log(removedElements);
  console.log(hobbies);

//------------------------------------------------------------
 //Indexof and Lastindex

  const testResults= [1, 5.3, 1.5, 10.99, -5, 1.5, 10];
  console.log(testResults.indexOf(1.5));
  console.log(testResults.indexOf(1.5,3));
  console.log(testResults.lastIndexOf(1.5));
  console.log(testResults.lastIndexOf(1.5, -1));
  console.log(testResults.lastIndexOf(22));
  const personData= [{name:"CK"}, {name:"Prabhat"}];
  console.log(personData.indexOf({name:"CK"}));
  console.log(personData.lastIndexOf({name:"prabhat"}));

//-------------------------------------------------------------
//when we have array of objects we use the find() and findIndexOf() to take out the element NOT INDEX.. 
//Find() 
 //findIndex()
 
    const personData = [{name:"VK"}, {name:"NN"}];
    console.log(personData.indexOf({name:"VK"}));

    const myName = personData.find((person, idx, persons) => {
     console.log(idx, "idx");
     return person.name === "VK"
    });
    console.log(myName, personData)

    const myIndex =personData.findIndex((person, idx, persons) => {
     console.log(idx, "index");
     return person.name === "NN"
    })
    console.log(myIndex);

//---------------------------------------------------------
 //Includes()
  const test = [12,3313,441,4141,41414,1241455,]

  console.log(test.indexOf(441,1));
  console.log(test.includes(12));
  console.log(test.includes(54545));

//--------------------------------------------------------------
//forof-- for Array and forin--- for Objects 
//forEach() is like forof
  const arr =[2.22, 13, 665,-433, 677.3]
  for(let value of arr)
  console.log(value);
 
  for(let o in arr) {
  console.log(o)
  console.log(arr[o])
  }

//forEach
 const articlePrice = [2133, 13331 ,1233, 3646, 57678];

 const shipping = 1500;

 const totalPrices = [];

  for(let value of articlePrice) {
   totalPrices.push(value + shipping);
  }
  console.log(value);
  console.log(totalPrices);

articlePrice.forEach((value, idx, articlePrice) => {
  const objvalue = { index: idx, totalPrice: value + shipping}
  totalPrices.push(objvalue);
});
console.log(totalPrices);


//-----------------------------------------------------------
//BEST SHORT METHOD
  var arr = [1, 2, 3, 4, 5, 6, 7];
 console.log (arr.reverse());

//------------------------------------------------------------
//------------------------------------------------------
 //REVERSE with For Loop
//  var arr = [1, 2, 3, 4];
//  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//     [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]; 
//  }
//  console.log(arr);

//----------------------------------------------------------
 //REVERSE AARAY
 const articlePrice = [5.99, 10.99, 3.99, 6.59];

  const names = ["Jack", "Nany", "Sam", "Nick"];

  const info = [{ name: "Jack" }, { name: "Nany" }, { name: "Sam"}];

  let sortedValue =articlePrice.sort((a,b) => {
  if(a>b) {
    return 3;
  } else if (a===b) {
    return 0;
  }
  else {
    return-4;
  }
});
console.log(articlePrice);
console.log(sortedValue);
console.log(sortedValue.reverse());

//------------------------------------------------------------
 //Reverse with function reverse
 function reverse(array) {
   var output = [];
   while (array.length) {
     output.push(array.pop());
   }

   return output;
 }

 console.log(reverse([1, 2, 3, 4, 5, 6, 7]));


//----------------------------------------------------------
 //*Reverse a STRINg with Function with "" i.e COMMA
 let string = "vinay"; 
 console.log(string.split("").reverse().join(""));
 
 //*Reverse a String with Function witout ""
 let str = "vinay"; 
 console.log(str.split("").reverse().join());


//------------------------------------------------------------
 //Reverse String
 // program to reverse a string
  function reverseString(str) {

//   // empty string
   let newString = "";
   for (let i = str.length - 1; i >= 0; i--) {
       newString += str[i];
   }
   return newString;
 }
 // take input from the user
 const string = ('Hello World');

 const result = reverseString(string);
 console.log(result);


//-----------------------------------------------------
 //Reverse String with Function
  // program to reverse a string

function reverseString(str) {

  // return a new array of strings
  const arrayStrings = str.split("");
 
  // reverse the new created array elements
  const reverseArray = arrayStrings.reverse();

  // join all elements of the array into a string
  const joinArray = reverseArray.join("");
  
  // return the reversed string
  return joinArray;
}

// take input from the user
const string = ('Hello');

const result = reverseString(string);
console.log(result);


//--------------------------------------------------
 //Filter()
  const prices = [22, 555, 56, 567]
  let filterValue = prices.filter((price, idx, prices) => {
   return price > 500;
  });
  console.log(prices);
  console.log(filterValue);












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

  


    



















       


























