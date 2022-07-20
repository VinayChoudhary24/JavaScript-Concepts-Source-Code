//-------------------------------------------------------------------
 //CALL, APPLY, BIND
 //Call invokes the function and allows you to pass in arguments one by one.(Function BORROWING)
//Apply invokes the function and allows you to pass in arguments as an array.
//Bind returns a new function, allowing you to pass in a this array and any number of arguments.

// CALL
let userDetails = {
  name: "V",
  age: 44,
  printDetails: function () {
    console.log(this.name);
    console.log(this.age);
  }
}
userDetails.printDetails();

let userDetails2 = {
  name: "VX",
  age: 443,
}
userDetails.printDetails.call(userDetails2);

//BIND

let user = {
  name: "VI",
  age: 33,
  print: function () {
    console.log(`my name ${this.name}, age ${this.age}`)
  }
}
user.print();

let user2 = {
  name: "aF",
  age: 3333,
}
let myFun = user.print.bind(user2);
myFun();


//--------------------------------------------------
//  let obj= {
//   fname:"ChandraKant",
//   lanme:"Pradhan",
//   age:30,
//   address:"Ahmedabad",
//   formatName:function() {
//     //console.log(this);
//     console.log(`My name is ${this.fname} ${this.lanme}`);
//   },
//   formatName: () => {
//     console.log(this);
//       console.log(`My name is ${this.fname} ${this.lanme}`);
//     }
//   };
//     Access the method directly referring to the Object
//     obj.formatName(); //Y

//     //Access the methods indirectly and later on
//     let formatName = obj.formatName;
//     let { formatName } = obj;
//     formatName = formatName.bind(obj);
//     formatName();// 

//     //Access the methods indirectly and immediately
//     formatName.call(obj, 2, 4, 5); 
//     // takes parameter with comma separated

// //APPLY    
// formatName.apply(obj, [4, 2.6]); // take parameteras an array
 
//------------------------------------------------------------------
//----------------------------------------------------------------------
/* write a program to print the Left angle Triangle Star Pattern.
*
**
***
****
***** */

for (var i=1; i<=5; i++){
  console.log("*".repeat(i));
}

//REPEAT()-INBUILD FUNCTION--is used to build a new string containing a specified number of copies of the string on which this function has been called.

//-----------------------------------------------------------
//Right angle Triangle Star Pattern
let n = 5;
for(let i=1; i<=n; i++){  
let str =" ".repeat(n-i);
let str2 ="*".repeat(i);
console.log(str + str2);
}

//WITH FUNCTION
//     function pyramid(n){
//   for(let i=1; i<=n; i++){  
//     let str =" ".repeat(n-i);
//     let str2 ="*".repeat(i);
//     console.log(str + str2);
//   }
// }
// pyramid(5);

//----------------------------------------------------------
/*write a program to print the pyramid of stars. */
let n = 5;
for(let i=1; i<=n; i++){  
let str =" ".repeat(n-i);
let str2 ="*".repeat(i*2 -1)
console.log(str + str2 + str);
}

/*
function pyramid(n){  //Function will take the value of n=5
  for(let i=1; i<=n; i++){  
    let str =" ".repeat(n-i);
    let str2 ="*".repeat(i*2 -1)
    console.log(str + str2 + str);
  }
}
pyramid(5);
*/   
      
//----------------------------------------
 //REVERSE PYRAMID
      
let n=5;
for(i=0; i<n; i++) {
  let str = " ".repeat(i);
  let str2 = "*".repeat(2*(n-i) -1);
  console.log(str + str2);
}


//  let n = 5;
//  let string = "";

//  // External loop--the Value of i and j will be same at a time i.e 0...
//  for (let i = 0; i < n; i++) {

//    // printing spaces
//    for (let j = 0; j < i; j++) {
//      string += " ";
//    }

//    // printing star
//    for (let k = 0; k < 2 * (n-i) - 1; k++) {
//      string += "*";
//    }
//    string += "\n";
//  }
//  console.log(string);

//---------------------------------------------------
//---------------------------------------------------
//THIS KEYWORD--refers to the CURRENT OBJECT
const obj ={
  name: "chair",
  getDetails: function(){
    return `This ${this.name} is very comfortable`;
    // console.log(`This ${this.name} is very comfortable`);
  }
};
console.log(obj.getDetails());
// obj.getDetails();

//IF

 const m1 =obj.getDetails;
 console.log(m1===obj.getDetails);

//--------------------------------------
/* THIS with OBJECT AND ANONYMOUS FUNCTION */
let person = {
  name: "Karan",
  age: 24,
  nationality: "indian",
  hobbies: ["travel", "playing"],
  address: {
    state: "gujrat",
    city: "udaipur",
  },
  getDetails: function() {
    console.log(`hello, my name is ${this.name}, my age is ${this.age}`)
  }
}
person.getDetails();

//-------------------------------------------------
//THIS with person
let person = {
  name: "Karan",
  age: 24,
  nationality: "indian",
  hobbies: ["travel", "playing"],
  address: {
    state: "gujrat",
    city: "udaipur",
  },
  getDetails: () => {
    console.log(`hello, my name is ${person.name}, my age is ${person.age}`)
  }
}
person.getDetails(); //WITH THIS KEYWORD DECLARE OBJECT NAME Instead of THIS Keyword.


//--------------------------------------------------------------------------
//------------------BASIC VARIABLES && ARITHMATIC && EQUALITY---------------------------------
//---------------------------------------------------------------
// Defining Variables:-
 /*let and var is used to declare variables. Const is used to declare a Constant:-- let name="Jack";
             var age="35";
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
// let a=5, b=5;
// console.log(a + b);

//2. - [Subtract two Numbers](right to left)
// let a=5, b=5;
// console.log(a - b);

//3. * [Multiply two numbers](left to right)
// let a=5, b=5;
//  console.log(a * b);

//4. / [divide two numbers](left to right)
// let a=5, b=5;
// console.log(a / b);

//5. % [divide two numbers and gives remainder](left to right)
// let a=5, b=5;
//  console.log(a % b);

//6. ** [exponentiation] (2 ** 3 =8)
// let a=5, b=5;
//  console.log(a ** b);

//7. = [Assign Value]

//8. += [perform addition and re-Assign Value]
// let a=5, b=6; 
// console.log(a += b);

//9. -= [Perform Substraction and re-Assign value]
// let a=5, b=5;
// console.log(a -= b);

//10 ++ [Increment and re-assign]
//POST-INCREMENT
//let a=5;
//console.log(a++); //5, Because it will increment the value by One but Evaluates/Assign the Value Before Increment

//PRE-INCREMENT
//let b=5;
//console.log(++b); //6, Because it will increment the value by one and Evaluates/Assign the NEW VAlUE.

//11. -- [Decrement And re-Assign]
// let a =5;
// console.log(a--); //5, Because it will decrement the value by One but Evaluates/Assign the Value Before decrement
// console.log(a--); //4

// let a =5;
// console.log(--a); //4, Because it will decrement the value by One and Evaluates/Assign the Value after decrement
// console.log(--a); //3

//--------------------------------------------------
 //Number and String
 let saving = 300;
 console.log(`Hello CK. You have net worth of $${saving}`);
 console.log('Hello CK. You have net worth of '+saving+'')
 console.log("Hello CK. You have net worth of "+saving+"")

//ESCAPE Characters
--\n = new Line
--\t = Horizontal Tabulator
--\' = Single Quote
--\" = Double Quote

//-------------------------------------------------
 //AND && 
let x=100, y=10;
 if (x===100 && y===10) { //both the Conditions should be TRUE
  console.log("true");
 } else {
  console.log("false")
 };

//  //OR
 let x=1000, y=100;
 if (x===100 || y===100) { //One Condition should be  TRUE, it Will Return TRUE
  console.log("true");
 } else {
  console.log("false")
 };

//---------------------------------------------------------
 //EQUALITY
 let obj1 = {name:"CK"};
 let obj2 = {name:"CK"};

 console.log(obj1==obj2); //false: Different Objects ahve different LOCATION

 console.log(obj1===obj2);

 let obj3 = obj2;
 console.log(obj2===obj3); //TRUE: Whole Object is Copied to Another Object

 console.log(obj2==obj3);

 let arr1 = ["sports","cooking"];
 let arr2 = ["sports","cooking"];
 let arr3 = arr2;
 console.log(arr1==arr2);
 console.log(arr1===arr2);
 console.log(arr2===arr3);

const prices= [5.99,10.99,3.99,6.59];
console.log(prices.reverse());

const names= ["ck","Prabhat","Yogesh","Haresh"];
console.log(names.reverse());


//-------------------------------------------------------------------------------
 //typeof(OPERATORS)

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
console.log(typeof(undefined));        //UNDEFINED
//--------------------------------------------------------------
 //UNDEFINED:- Default value of uninitialized variables

 //NULL:- never assumed by default 

 //NaN:- result of invalid calculations

//--------------------------------------------------
 //TERNARY OPERATOR
  2 > 3 ?   console.log("true value") : console.log("false");

//-------------------------------------------------------------------
//---------------ARRAY-------------------------------------------------------
//---------------ARRAY--------------------------------------------------------------
//------------------------------------------------
//ARRAY ACCESS Elements
let arrr= [1,2,3,4,5];
let age=30;
let arr1= ["ck",2,arrr, ["a","b"],age];
console.log(arr1[0]);
console.log(arr1[3][0]);
console.log(arr1[2][4]);
console.log(arr1[3][1]);

//-----------------------------------------------  
const arr3 =[["one", "three"],[1,57,67]];
console.log(arr3[0][0]); //ONE
       
const arr3 =[["one", "three"], [12,44,23]];
console.log(arr3[0][1]); //THREE
console.log(arr3[1][2]); //23
       
//example for objects        
let arr = [{name: "VC", age: 22}, 
[{name: "CC", age: 33}, {name: "BB", age: 44}]];

console.log(arr[0].age); //22
console.log(arr[1][0].age); //33
console.log(arr[1][1].age); //44

//example for functions
const arr5=[{
   name:"jss", videos:1213     
},[
   //on 0 index of inner array
   function(){
      return "containing array";   
   },
   //on 1 index of array
   "three"      
]
];
console.log(arr5[0].name); //JSS
console.log(arr5[1][0]());  //CONTAINING ARRAY
console.log(arr5[1][1]);  //THREE

//-------------------------------------------------------
 //STRING INTO NUMBERS
let name='2';
console.log(parseInt(name)+2); //4, Adds the Numbers-- parseInt converts string into Numbers
console.log(name+2); //22, it takes '2' as a string

//NUMBER TO STRING
var myNumber=120;
var myString = myNumber.toString();
console.log(myString)

//CONVERT STRING INTO ARRAY 
const arr3 = Array.from("hello");
 console.log(arr3); //Split [h, e, l, l, o];

//ARRAY INTO STRING
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.toString();
//console.log(fruits.toString());a
console.log(text);

//----------------------------------------------------------
//  //Array Operations(push, pop, shift, unshift)
 const hobbies= ["Sports","Cooking"];
 hobbies.push("Reading"); // add element at the end of the array
 console.log(hobbies);
 hobbies.unshift("Coding"); // add at the begining of the array
 console.log(hobbies);
 const poppedValue=hobbies.pop(); // Remove from the end of the array
 console.log(poppedValue); //and returns the remvoed element
 let removedEle = hobbies.shift(); // Remove fromthe beginning of the arrray
 console.log(removedEle);
 console.log(hobbies);

//------------------------------------------------------------
 //ARRAY SORT[BUBBLE SORT]
 
 let numbers = [0, 123 , 223, 53, 130, 20, 30 ];
 numbers.sort( function( a , b){
     if(a > b) return 1; //always use positive value for ascending sort here, use negative value to sort descending
 
     if(a < b) return -1; //always use negative value for ascending here, use positive value to sort desscending
     return 0;
 });
 
 console.log(numbers)

//---------------------------------------------------------
 //SORT-REVERSE together
const prices= [5.99,10.99,3.99,6.59];
const names= ["ck","Prabhat","Yogesh","Haresh"];
const info= [{name:"CK"}, {name:"Prabhat"}, {name:"Haresh"}];
let sortedValue=prices.sort((a,b) => {if(a>b) {
  return 1; //always use positive value here, use negative value to sort reverse
} else if(a===b) {
  return0;
} else {
  return -1; //always use negative value here, use positive value to sort reverse
}});
console.log(prices);
console.log(sortedValue);
console.log(sortedValue.reverse());

//-------------------------------------------------
 //ARRAY STRING REVERSE
let arr = ["as", "asa", "sdd"];
console.log(arr.reverse());

//----------------------------------------------------------
 //*Reverse a STRINg with Function with "" i.e COMMA
 let string = "vinay"; 
 console.log(string.split("").reverse().join(""));
 
//  //*Reverse a String with Function witout ""
 let str = "vinay"; 
 console.log(str.split("").reverse().join());

//--------------------------------------------------
 //Array String Reverse with LOOP
let arrstr = ["as", "asa", "sdd"]; //ARRAY

let arrstr2 = []; //EMPTY ARRAY

for(let i=arrstr.length-1; i>=0; i--) { //last number is removed
  
  arrstr2.push(arrstr[i]) //Removed num. is pushed in arr2
}
console.log(arrstr2);

//------------------------------------------------------------
//ARRAY NUM. REVERSE
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log (arr.reverse());

//----------------------------------------------------
 //ARRAY NUM. REVERSE WITH LOOP
let arr = [1, 2, 3, 4]; //ARRAY

let arr2 = []; //EMPTY ARRAY

for(let i=arr.length-1; i>=0; i--) { //last number is removed
  
  arr2.push(arr[i]) //Removed num. is pushed in arr2
}
console.log(arr2);

//--------------------------------------------------------
//  //ARRAY DESTRUCTING
 const userDetails= ["Max","Schwarz","Mr",30];
//  const firstName = userName[0];
 // const lastName = nameData[1];
 const[firstName,lastName, ...otherInformation]=nameData;
 console.log(firstName);
 console.log(lastName);
 console.log(otherInformation);


// //----------------------------------------------------
//  //ARRAY Reduce
 const prices= [10.99,5.99,3.99,6.59];
 const sum=prices.reduce((total, curValue, currentIndex, arr) => {
  return total + curValue;
},0);
console.log(prices);
console.log(sum);

 //----------------------------------------------------------
  //SLICE    
  const arr = [23, 553, 46, 677, 57];
  console.log(arr.slice(1, 3));

//-------------------------------------------------------------
 //SPLICE() METHOD
  const hobbies= ["Sports","Cooking"];
  hobbies.splice(0,0,1,"one");
  console.log(hobbies);
  let val=hobbies.splice(0,0,"singing");
  console.log(val);
  console.log(hobbies);
  const removedElements=hobbies.splice(-2,2,"running");
  console.log(hobbies);
  console.log(removedElements);
  console.log(hobbies);

 //-----------------------------------------------------
  //ARRAY CONCAT
  const arr1 =[12, 33, 44, 555];
  const arr2 = [22, 44, "asd", "adadd"]
  let conArr = arr1.concat(arr2);
  console.log(conArr);
  let newArr = arr1.concat([23424, 23525, 235542]);
  console.log(newArr.push(34));
  console.log(newArr);

//------------------------------------------------------------
 //Indexof and Lastindex

 const testResults= [1,  5.3, 1.5, 10.99, -5, 1.5, 10];
 console.log(testResults.indexOf(1.5));
 console.log(testResults.indexOf(1.5,3));
 console.log(testResults.lastIndexOf(1.5));
 console.log(testResults.lastIndexOf(1.5, -2)); //5
 console.log(testResults.lastIndexOf(1.5, -3)); //2
 console.log(testResults.lastIndexOf(1.5, -5)); //2
console.log(testResults.lastIndexOf(1.5, -6)); //-1
 console.log(testResults.lastIndexOf(22));

//-----WITH OBJECTS THESE TWO DOSENT WORK, We Introduce Find and FindIndex-----------
//  const personData= [{name:"CK"}, {name:"Prabhat"}];
//  console.log(personData.indexOf({name:"CK"}));
//  console.log(personData.lastIndexOf({name:"prabhat"}));

//-------------------------------------------------------------
//when we have array of objects we use the find() and findIndexOf() to take out the element NOT INDEX.. 
//Find() 
 //findIndex()
 
   const personData = [{name:"VK"}, {name:"NN"}];

  const findData = personData.find((person, idx, personData) => {
    console.log("index: ", idx);
    return person.name==="VK";    
  })
  console.log(findData);

  const findPerson = personData.findIndex((person, idx, personData) => {
    console.log("index: ", idx);
    return person.name==="NN"
  })
  console.log(findPerson); //INDEX and ELEMENT INDEX

//--------------------------------------------------
 //Filter()
 const prices = [22, 555, 56, 567];

let filteredVlaue = prices.filter((price, idx, prices) => {
  return price < 500;
});
console.log(filteredVlaue);

//-------------------------------------------------------
 //SPLIT()
 const text = "Welcome to JavaScript Tutorial - ItsJavaScript";

// split the text into words using space as delimiter
 const substr = text.split(" ");
 console.log(substr);

 //split the text into SINGLE LETTERS
 const sub = text.split("");
//  console.log(sub);

const text = "Welcome to INDIANIC"
console.log(text.split(" "));

//------------------------------------------------------------
 //JOIN()
 const myText = "It is a long established fact that a reader will"
 const newText = myText.split(" ").join("")
 console.log(newText); 

//-------------------------------------------------------------
// forEach
 const articlePrice = [2133, 13331 ,1233, 3646, 57678];

 const shipping = 1500;

 const totalPrices = [];

// for(let value of articlePrice) {
  //totalPrices.push(value + shipping);
 //}
 //console.log(totalPrices);

articlePrice.forEach((article, idx, articlePrice) => {
  const articleValue = { index: idx, totalPrice: article + shipping}
  totalPrices.push(articleValue);
});
console.log(totalPrices);

//--------------------------------------------------------
 //MAP
 const articlePrices= [10.99,5.99,3.99,6.59];

 const tax=1.2;

const totalPrices = articlePrices.map((price, idx, articlePrices) => {
  const articleValue = {index: idx, totalPrice: price + tax};
  return articleValue;
})
console.log(totalPrices);

//---------------------------------------------------------------------------
//-------------LOOPS------------------------------------------
//---------------------LOOPS----------------------------------

//while loop:- block of codes to be executed once
let count = 0;
while(count<10){
   console.log(count); //print
   count++; //increase     
   //count = count + 1; same statement       
}

//Do while loop(*block of codes executes atleast one time)
let count = 0;      
do{
   console.log(count); //print
   count++; //increase         
} while(count<5); 

//For loop
for(let count = 0;count<5;count++)   
   console.log("number:" + count);
for (let count = 0; count <5; count++) {
   console.log("number: " + count);            
}

//-----------------------------------------------------
 //IF loop
var age=12;
if(age>=18) {
  document.write("You are an adult");
}
if(age<18) {
  console.log("You are NOT an adult");
}
//------------------------------------------------
//  //IF-ELSE
 var hours= new Date().getHours();
 if(hours<12) {
  document.write("Good Morning!!!");
}else {
  console.log("Good Afternoon!!!");
}
//-------------------------------------------------
 //IF-ELSE IF -ELSE
 let age = 18;
 if(age<17) {
  console.log("you are not adult");
 } else if(age>40) {
  console.log("you are old")
 } if(age === 18) {
  console.log("you are adult")
 };

//------SWITCH-CASE-------------------
 //one VALUE

let val="CK";
switch(val) {
  case "CK":
    console.log("This is CK");
    console.log("CK is going to Market");
    break;
    case "Prabhat":
      console.log("This is Prabhat");
      console.log("Prabhat is going to School");
      break;
      default:
        console.log("No one is there");
        console.log("No Activity is performed");
      }

///--------FOR LOOP------------
 //executes loop over CONDITION

 for( let i = 0; i<3; i++) {
  console.log("------------"); //-----------
} 

for( let i = 10; i>0; i--) {
  console.log(i) //10,9,8,7.....
};

//-----FOR OF---------------------------------
 //Executes Over each ELEMENT of ARRAY[]

 let arr = ["CK","Prabhat","Pankaj"];
 let str = "This is string";

for(const value of arr) {
  console.log(arr.indexOf(value), ":", value);
  console.log(); //value with INDEX
}

//-----FOR IN---------------------------------
 //executes over each KEY in OBJECT

 // Single loop
 let obj = {
  name: "CK",
  age:30,
  hobby:"music, cricket",
};
for(const o in obj) {
  console.log(`${o}=>${obj[o]}`);
} 

// //loop inside loop
let arr = [{
  name:"CK",
  age: 30,
  hobby: "Playing cricket",
},
{
  name:"Prabhat",
  age:22,
  hobby:"Singing",
},
{
  name:"Pankaj",
  age:28,
  hobby:"Dncing",
},
];

for(const element of arr) {
  console.log(element);
  for(const key in element) {
    console.log(`${key}=>${element[key]}`);
  }
}
//----BREAk and CONTINUE-----------------------------------
 //Break statement Will BREAK the EXECUTION at the POINT and TERMINATE THE LOOP.

 //CONTINUE will BREAK the EXECUTION at ONLY That Point and Will CONTINUE after that.

 for( let i = 0; i<10;i++) {
  if(i==5) {
    // break; //0,1,2,3,4,BREAK

    continue; //0,1,2,3,4,BREAK,6,7,8,9
  }
  console.log(i);
 }

//------------------------------------------------------------
 //FOR-IN LOOP--access object properties dynamically

 let person= {
  name:"CK",
  "Last Name":"Pradhan",
  age:30,
  hobbies:["Sports","Cooking"],
  greet:function() {
    console.log("hello")
     
    /*access particular key through this function */
    /* console.log(this.age);
    console.log(this["1.5"]);
    console.log(this["Last Name"]); */ 
    
    /*USING THIS KEY WORD*/
    /* for(let p in person) {
      console.log(`${person[p]}`) //
    } */

    /* Access particular property with loop from inside function */
    /* for(let p in person) {
      console.log(`${person.name}`) //
    } */
  },
  1.5:"One point five",
};

// console.log(person.name); //for particular property
 /* person.greet(); */ 

//NORMAL LOOP
for(let p in person) {
  console.log(person[p]); //here[p] is key
}

//USING $
for(p in person) {
  console.log(`${p} => ${person[p]}`); //${p} is Used for keys
}

//----------------------------------------------------------------------
//-------------------FUNCTIONS---------------------------------
//------------------FUNCTIONS--------------------------------------

//------------------------------------------------------
 //function Declaration
function add(a, b) { //formal
let result = a + b;
console.log(result);
}
//Calling function
add(3,4) //actual parameter

// function add(a, b) {
  const results = a + b;
  alert("thanks");
  return results;
  // alert('Thanks'); //any statement after return will not execute
};

//---------------------------------------------------------------
 //Direct and Indirect Calling
      function mahol(){
        console.log("ho");
        console.log("gaya");
      }

      mahol(); //call function

 //You directly execute a function: someFunction()
 //You schedule a function for future execution: el.addEventListener   ('click', someFunction)

//------------------------------------------------------------
 //function as a Statement
  function add(a, b) {
    const results = a + b;
    console.log(results);
    // return results;
  }
  add(3, 4); //without RETURN

  // function add(a, b) {
  //      const results = a + b;
  //     //  console.log(results);
  //       return results;
  //    }
  //   console.log(add(3, 4)); //With Return

//Function as a Expression (ANONYMOUS FUNCTION)
  let add = function (a, b) {
    let results = a + b;
    return (results);
  }
  console.log(add(3, 4));

//---------------------------------------------------------------
 //FUNCTION WITH METHODS-- FUNCTION INSIDE AN OBJECT IS CALLED METHOD and STORED WITH KEY
  let person = {
    name: "VC", //property

  //this is Method
  greet: function () {  //greet is KEY
    console.log("hello V");
   }
     
  };

//-----------------------------------------------------------
 //ANONYMOUS FUNCTION --function withoout NAME, stored in a variable
 let add = function (a, b) {
  const results = a + b;
  return results;
 } 

 console.log(add(4, 4));

 //ANONYMOUS FUNCTION WITH NAME -- ERROR(addNum not Defined)
 let add = function addNum (a, b) {
  const results = a + b;
  return results;
 }
 add(4,4);
 addNum(5,5);
 
//------------------------------------------------------------
   //DEFAULT VALUE TO PARAMETER
   function  multiply(a=2, b=1) {
    a= a || 3;
    return a * b;
  }
  console.log(multiply(5,2)); //value of a is 5 & b is 2, because ACTUAL parameter will REplace FORMAl value 1. 
  expected output: 10

  function  multiply(a, b=1) {
    a = a||3;
    return a * b;
  }
  console.log(multiply()); //value of a is 3 and b is 1
  expected output: 3

//----------------------------------------------------------
//Default Arguments in functions

let add = function (a, b) {
  console.log(arguments);
  const results = arguments[0] + arguments[1]; //Here, [0] and [1] are index to access from ACTUAL parameter
  return results;
}
console.log(add(3, 4));

// DEFAULT ARGUMENTS with ARROW
 //Default Arguments are not Available in ARROW FUNCTIONS
 let showArgs= () => {
  console.log(...arguments);
};
showArgs(1,2,3); //ERROR-NOT DEFINED
 
//----------------------------------------------------
 //IIFE-Immediately Invoked Function Expression
 //NAMED and ANONYMOUS function Supports IIFE 
 (function () {
  console.log("this is IIFE ANONYMOUS");
})(); 

// arrow function
(() => {
  console.log("this is IIFE arrow function");
})();

//--------------------------------------------------
 //REST OPERATOR(PASSED AS PARAMETER TO FUNCTION)
 //rest operator will combile the rest of the values and gives an Array of values and we can use index to access each value from array
 //It Converts the values in ARRAY
 const sumUp = (a, b, ...numbers) => {
  let sum=0;
  for(const num of numbers) {
    console.log(num);
  }

}
console.log(sumUp(1,5,10, -3,6,10)); //10, -3 6, 10
console.log(sumUp(1,5,10, -3,6,10,25,88));

//  const sumUp = (a,b, ...numbers) => {
//   let sum=0;
//   for(const num of numbers) {
//     sum += num;
//   }
//   return sum;
// }
// console.log(sumUp(1,5,10, -3,6,10)); //23
// console.log(sumUp(1,5,10, -3,6,10,25,88)); //136

//--------------------------------------------------------
 //CALLBACK FUNCTIONS -is a function passed as an argument to another function
 
function main(firstname, lastname) {
  console.log("hello, my name is " + firstname + " " + lastname); 
}
//callback function
function displayname () {
  main("vinay", "choudhary");
}
displayname();

//-----------------------------------------------------------
 //CLOSURE 
 /*  closure   */
//function inside another function.
//use return keyword. 
//values are retained in closure and not get lost
//use of lexical scope

  //Example:-
 /* var sum=function(a){
    console.log("hello "+a);
    var c=4;
    return function(b){
      return a+b+c;
    }
  }
  //create a variable to store return
  var store=sum(2); //jo function sum function ne diya h wo store kiya h STORE m h
  console.log(store(5)); //CLOSURE PROCESS:- when we called var store=sum(2) it reaches to var sum function and we get hello 2, now we call console.log(store(5)) which goes inside the sum function to the RETURN function and give b=5 and it also access the A=2 and C=4 in return of the RETURN function(because in CLOSURE VALUES ARE RETAINED EVEN WHEN WE CALL TWO FUNCTIONS, FUNCTION INSIDE ANOTHER FUNCTION) */

//-----------------------------------------------------------------
//--------------OBJECTS------------------------------------------
//-------------------OBJECTS----------------------------------------

//OBJECTS(add, modify, delete)
 let person = {
  name:"CK",
  "Last Name":"Pradhan",
  age:30,
  hobbies:["Sports","Cooking"],
  greet:function () {
    alert("Hi there!");
  },
  1.5:"One point five",
  12: "cc"
};

//Accessing property of Object
console.log(person);
console.log(person.name); 
console.log(person.hobbies);
person.hobbies.push("SS");
console.log(person.hobbies);
console.log(person.hobbies[0]);
console.log(person["Last Name"]);
person["Last Name"] = "M";
console.log(person["Last Name"]);
console.log(person[1.5]); //number dont need ""
console.log(person[12]);

//Accessing a property which is not in the object
console.log(person.isAdmin); //UNDEFINED

//ADD AND update PROPERTIES
person[12] = "VV";
console.log(person[12]);

person.mark = 23; //ADD NEW PROPERTY
console.log(person.mark);

person.age = 31;
console.log(person);
person.age = undefined;
console.log(person);
person.age = null;
console.log(person.age); //null
console.log(person);

// Deleting property
delete person.age;  
console.log(person);

//---------------------------------------------------------------
 //for-in LOOPS
 let person= {
  name:"CK",
  "Last Name":"Pradhan",
  age:30,
  hobbies:["Sports","Cooking"],
  greet:function() {
    alert("Hi there!");
  },
  1.5:"One point five",
};
for(let p in person) {
  console.log(person[p]);
}
for(p in person) {
  console.log(`${p} => ${person[p]}`);
}

//----------------------------------------------------
 //Accessing PROPERTIES      
       const arr4 =[
       {name:"ak", no:34},[
          //declare two objects
          {name:"sos", subjects:"js"},
          {
             name:"os",  subjects:"literals"
          }
        ]
      ];      
      console.log(arr4[1][0].name); //SOS
      console.log(arr4[0].no); //34
      console.log(arr4[1][1].subjects); //LITERALS

//-------------------------------------------------------------
 //OBJECT DESTRUCTURRING --store a key in multiple 
 let obj= {
  name:"CK",
  age:30,
  address:"Ahmedabad",
  hobbies:["sports","singing"],
 };
//  obj.hobbies.push("SS");
//  console.log(obj);

let address= obj.address;
let {
  hobbies,
  name} =obj;
  console.log(hobbies); //print Hobbies

//-------------------------------------------------------
 //SPREAD OPERATOR---PASSED at the Time of Calling
 //COPY the FIRST LEVEL KEYS of FIRST OBJECT(person) to SECOND OBJECT(person2).
 //when we ADD a KEY it will REFLECT ONLY in the ADDED OBJECT.
 //spread operator breaks/divides the combined values from array/object

 /* SPREAD WITH ARRAY */
 let arr = [12, 23, 32, 3213, "asd", "asddsa"];

 /* Create function to access all values */

 function getarray(a1, a2, a3, a4, a5, a6) {
  console.log(a1, a2, a3, a4, a5, a6);
 }
 
 getarray(...arr); //pass SPREAD operator

//-----------------------------
/* SPREAD WITH OBJECT */
let obj = {
  name: "VKK",
  age: 22,
  hobbies: ["sports", "travel"],
}

let newObj = {
  ...obj, //spread operator

  age: 24, //Change the age Key

  college: "VIT", //add new property
}
console.log(newObj);

//------------------------------
/* Full Spread Operator */

//INITIAL OBJECT
let person = {
  name: "Karan",  //first level key
  age: 24,
  nationality: "indian", 
  hobbies: ["travel", "playing"], //second level key
  address: {
    state: "gujrat", //second level key
    city: "Ahmedabad",
  },
  getDetails: function() {
    console.log("hello")
  },
};

//Create Brand new OBJECT and use SPREAD to copy first level keys
let person2 = { ...person };

//ADD A KEY AT FIRST LEVEL IN INITIAL OBJECT
person.profession = "engineer"; //Here, this will UPDATE in initial Object(person) but will not be added in brand new object(person2)

//Change a FIRST LEVEL KEY IN INITIAL OBJECT
person.age = 22; 

//DELETE A FIRST LEVEL KEY in initial object
delete person.nationality; 

//***CHANGE A SECOND LEVEL KEY in Initial Object
person.address.state = "Delhi"; //HERE, this will be UPDATED in BOTH the OVJECTS i.e INITIAL & NEW
person.hobbies.push("Meditation");

//CHANGE A SECOND LEVEL KEY in Brand New Object
person2.address.state = "Rajasthan"; //HERE, this will be UPDATED in BOTH the OBJECTS i.e INITIAL & NEW

//ADD in PERSON2
person2.pro = "AE";

console.log("person: ", person); //call initial OBJECT

console.log("person2: ", person2); //call Brand new OBJECT


/* **How to RESTRICT the Second Level Issue With Spread Operator** */
// //Create a BRAND NEW OBJECT
//  //**HERE, WE PASS THE SECOND LEVEL KEYS WITH SPREAD OPERATOR
let person3 = { ...person,
  hobbies: [ ...person.hobbies],
  address: { ...person.address},
 };

//**NOW, Change the SECOND LEVEL Key
person.address.state = "Delhi"; //Here, this will UPDATE in initial Object(person) but will not be added in brand new object(PERSON3)

//ADD in PERSON3
person3.hobbies.push("Meditation"); //Here, this will UPDATE in Brand New Object(PERSON3) but will not be added in INITIAl object(PERSON)

console.log("person: ", person);
console.log("person3: ", person3);

//--------------------------------------------------------------
//-------------------------------------------------------------
 //CONSTRUCTOR/PROTOTYPE Function
 //PROTOTYPE CONSTRUCTOR -- uses THIS KeyWORD to Declare Variables
 // 1. A constructor is a function that creates an instance of a class which is typically called an “object”.

// 2. In JavaScript, a constructor gets
// called when you declare an object using the new keyword.

// 3. The purpose of a constructor is to create an object and 
// set values if there are any object properties present.

//4.Add any keys/methods Dynamically with use of PROTOTYPE Keyword

// //1:-constructor is a function that creates an instance of a class
function person () {
  //use this to declare keys
  this.name= "jack",
  this.age= 24,
  this.getDetails = function () {
    // console.log(`hello, I am ${this.name} and my age is ${this.age}`);

    console.log("hello, I am "+ this.name +" and my age is "+ this.age+ ""); //DONT USE BECTIC``
  };
};
person(); //This will NOT work

//2:-Creating a INSTANCE--a constructor gets called when we declare an OBJECT using the NEW keyword.
//We Convert Function to Object
let p = new person();
p.getDetails();

//4:-Add any keys/methods Dynamically with use of PROTOTYPE Keyword
person.prototype.address = "Delhi";
console.log(p.address);

//Add a METHOD with PROTOTYTPE
person.prototype.printAge = function () {
  console.log(`My age is ${this.age}`);
};
console.log(p.printAge());

// delete person.prototype.name;

//-------------------------------------------
function person (n, a) {
  //use this to declare keys
  this.name= n,
  this.age= a,
  this.getDetails = function () {
    // console.log(`hello, I am ${this.name} and my age is ${this.age}`);

    console.log("hello, I am "+ this.name +" and my age is "+ this.age+ ""); //DONT USE BECTIC``
  };
};
// person(); //This will NOT work

//2:-a constructor gets called when we declare an OBJECT using the NEW keyword.
//We Convert Function to Object
let p = new person("jack", 24);
p.getDetails();

let w = new person("NN", 25);
w.getDetails();

//------------------------------------------------------------------------------------------
//------------------CLASSES-----------------------------------------------------
//----------------------CLASSES-----------------------------------------------------------

 class person {

  //we dont use keyword function for PARAMETER in CLASS INSTEAD we use CONSTRUCTOR KEYWORD for PASSING PARAMETERs
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
    greet() {
      console.log(`Hello, i'm ${this.name} and my age is ${this.age}`);
//       console.log("For " +this.name+ " Honesty is the Best Policy");
    }
 };

 //CALL CONSTRUCTOR WITH THE KEY NEWKEYWORD
 let constructPerson = new person("Jacky", 28);
 constructPerson.greet(); 
//--------------------------------------------------------------------------
class Person2 {
  constructor(age,name) {
    this.age =age||30;
    this.name =name||"CK"; //Retur PRABHAT AND 25
    
    // this.age =age && 30;
    // this.name =name && "CK"; //Return CK and 30
  }
  greet() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
  }
}

let classObj= new Person2(25,"Prabhat");
classObj.greet();

//-----------------------------------------------------------
 //STATIC METHOD

class Person2 {
  constructor(age,name) {
    this.age =age||30;
    this.name=name||"CK";
  }
  greet() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);}profession="IT Professional";
    
    //ADD PROPERTY wit STATIC KEYWORD
    static address ="Ahmedabad";

    //ADD METHOD WITH STATIC KEYWORD
    static showAddress() {
      console.log(`I am staying in ${this.address}`);
    }
  };

  let constructPerson = new Person2(28, "Jacky");
  constructPerson.greet();
  
  console.log(constructPerson.profession);

  Person2.showAddress();

  // constructPerson.showAddress(); //ERROR

  // console.log(constructPerson.showAddress()); //ERROR

//---------------------------------------------------------
  //EnCApsulation

  class person {
    constructor(name,id) {
      this.name =name;
      this.id =id;
    }
    add_Address(add) {
      this.address =add;
      this.getDetails = function() {
        console.log(`Name is ${this.name}, Address is: ${this.address}`);
      };
      this.getDetails();
    }
  }
  
  let person1 = new person("CK",21);
  person1.add_Address("Ahmedabad");

  //--------------------------------------------------------
   //INHERITANCE
   class person {
    constructor(name) {
      this.name=name;
    }
    //method to return the string 
    displayName1() {
      return`Name of person: ${this.name}`;
    }
  }
  class student extends person {
    constructor(name,id) {
      //super keyword for calling above class constructor
      super(name);
      this.id=id;
    }
    displayName(params) {
      console.log(params);
      console.log(` ${super.displayName1()},
      Student ID: ${this.id}` );
    }
  }
  let student1 = new student("Muk", 22);
  student1.displayName();

  //-------------------------------
  //-----INHERITANCE INSTANCEOF OPERATOR--------------
  // It Checks for BOOLEAN EXPRESSION(True/False)

  class person {
    constructor(name) {
      this.name =name;
    }
    //method to return the stringd is
    displayName1() {
      return`Name of person: ${this.name}`;
    }
  }
  class student extends person{
    #id="";
    constructor(name,id) {
      //super keyword for calling above class constructor
      super(name);
      this.#id= id;
    }
      displayName() {
        console.log(` ${super.displayName1()},
        StudentID: ${this.#id}`);
      }
    }
    let student1 = new  student("Mull",22);
    student1.displayName();
    // console.log(student1.#id);

    //CALL the INSTANCEOF Operator
    console.log(student1 instanceof student); //TRUE

    console.log(student1 instanceof person); //TRUE

  





























/*  modules */
/* PROBLEM STATEMENT:- when working on a  big project or long codes   

   //module concept:- we have two .js files(First file has VARIABLES, FUNCTIONS, CLASSES), now if i want to use these variables,functions and classes INTO second file, here with the help of MODULES we use andy function, varable and class of the first file and second file 
   //it increases the re-useability and maintainability of the codes.
   //it increases the loading of the HTML files.

   
      //Example:-(make two files and use the name variable and the second file)

          /*FILE1:-

              export let person = "VC";

              export function hello(){

               }
               class user{

               }

        //FILE2:-(using keyword EXPORT in the file1 i.e export let name = "VC") (in file2 use the keyword IMPORT)

          import {person} from `./file1.js`

          import {hello} from `./file1.js`
          //one more way to do this:-
          import {person, hello, user} from `./file1.js`

      //Example:- to use this files in HTML use this syntax:-

          <script type = "module" src="./file2.js"></script>
          */  

   //modules has two different functions:- 1. IMPORT     2. EXPORT

    
/*   
  **EXAMPLE USING MODULE1 AND MODULE2:-

import { name } from './module1-user.js';
console.log(name);

import { code } from './module1-user.js';
code(); 


//IF WE NEED TO IMPORT(shortcut) MANY FILES FROM DEIFFERENT .JS FILES, WE CAN USE THIS TECHNIQUE:-
import { withdraw, deposit } from './module2-account.js';
withdraw();
deposit();


//WE CAN ALSO RENAME THE IMPORT(FUNCTIONS, VARIABLES ETC.) BECAUSE SOME FUNCTIONS, VARIABLES ETC. WILL HAVE SAME NAMES BUT THEY ARE IN DIFFERENT FILES. SO, WE RE-NAME THEM WHILE IMPORTING TO AVOID NAMES COLLISION... REGARDLESS OF THEIR NAMES OF EXPORTS.:-
import { withdraw as wd } from './module1-user.js';
wd(); //HERE TWO FUNCTIONS HAVE SAME NAMES SO WE RE-NAME ONE AND IMPORT THEM AND THEY ARE CALLED SEPARATELY BECAUSE THEIR FILES ARE DIFFERENT.


//IF WANT TO EXPORT(SHORT-CUT) MANY VARIABLES, FUNCTIONS AND CLASSES ETC. FROM ONLY ONE FILE, WE CAN USE THIS:-
import * as userfile from './module1-user.js';
userfile.code();
console.log(userfile.name);
userfile.withdraw();
wd();

import * as accountfile from './module2-account.js';
accountfile.deposit();
accountfile.withdraw();
*/


/*
//PURPOSE OF DEFAULT FUNCTION:- WHEN THE WHOLE CODE IS CALLED OR INVOKED WITH ONLY ONE FUNCTIONS IN .JS FILES, WE CAN JUST MAKE THAT ONE FUNCTION DEFAULT AND USE IT WHEN IMPORT. WHEN FUNCTIONS, VARIABLES ETC. HAVE SAME NAME AND THEIR IS A CHANCE OF COLLISION JUST MAKE THEM DEFAULT FUNCTIONS, SO THAT WHEN WE IMPORT THEM WE NEED TO RE-NAME THEM AND THIS REMOVES THE NAME COLLISION ERROR.
//CALLING DEFAULT FUNCTION:-ALWAYS NAME DEFAULT FUNCTION WHEN CALLING:-
import { default as userdefault, withdraw as wd, code } from './module1-user.js';
userdefault();
wd();
code();

import { default as accountdefault, withdraw, deposit } from './module2-account.js';
accountdefault();
withdraw();
deposit();
*/
