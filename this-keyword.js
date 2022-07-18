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
//console.log(fruits.toString());
console.log(text);

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

//----------------------------------------------------------------
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
      
 let n = 5;
 let string = "";

 // External loop--the Value of i and j will be same at a time i.e 0...
 for (let i = 0; i < n; i++) {

   // printing spaces
   for (let j = 0; j < i; j++) {
     string += " ";
   }

   // printing star
   for (let k = 0; k < 2 * (n-i) - 1; k++) {
     string += "*";
   }
   string += "\n";
 }
 console.log(string);


//-------------------------------------------------
 //ARRAY STRING REVERSE
let arr = ["as", "asa", "sdd"];
console.log(arr.reverse());

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



























/* this keyword */

   //refers to the current object.

   //example
     
      /*
      const obj ={
        name: "chair",
        stability(){
          return `This ${this.name} is very comfortable`;
        }
      };
      console.log(obj.stability());

    //if

       const m1 =obj.stability;
       console.log(m1===obj.stability);
       */
     
