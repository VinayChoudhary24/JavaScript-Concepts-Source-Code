//------------------------------------------------------
 //function Declaration
function add(a, b) { //formal
let result = a + b;
console.log(result);
}
//Calling function
add(3,4) //actual parameter

function add(a, b) {
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

      mahol();*/ //call function

 //You directly execute a function: someFunction()
 //You schedule a function for future execution: el.addEventListener   ('click', someFunction)

//------------------------------------------------------------
//  //function as a Statement
  function add(a, b) {
    const results = a + b;
    console.log(results);
    // return results;
  }
  add(3, 4); //without RETURN

  // function add(a, b) {
       const results = a + b;
      //  console.log(results);
        return results;
     }
    console.log(add(3, 4)); //With Return

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

//----------------------------------------------------------------------------------------
/* arrow notation(()=>{}) */

   //always anonymous

   //three way syntax:-
   
    /*
     1.you can omit the function keyword.

     2.if a single parameter then you can omit the parentheses.

     3.if single statement then you can omit the curly Braces.
    */

    //EXAMPLE
     const add = (a, b) => {
      const result = a + b;
       return result;
     }
     console.log(add(6,6));

 

//------------------------------------------------------------
   //DEFAULT VALUE TO PARAMETER
   function  multiply(a, b=1) {
    a= a || 3;
    return a * b;
  }
  console.log(multiply(5,2)); //value of a is 5 & b is 2, because ACTUAL parameter will REplace FORMAl value 1. 
  //expected output: 10

  function  multiply(a, b=1) {
    a = a||3;
    return a * b;
  }
  console.log(multiply()); //value of a is 3 and b is 1
  // expected output: 3


//----------------------------------------------------------
//Default Arguments in functions

let add = function (a, b) {
  console.log(arguments);
  const results = arguments[0] + arguments[1]; //Here, [0] and [1] are index to access from ACTUAL parameter
  return results;
}
console.log(add(3, 4));

 //DEFAULT ARGUMENTS with ARROW
 ////Default Arguments are not Available in ARROW FUNCTIONS
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

// // arrow function
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
 var sum=function(a){
    console.log("hello "+a);
    var c=4;
    return function(b){
      return a+b+c;
    }
  }
  //create a variable to store return
  var store=sum(2); //jo function sum function ne diya h wo store kiya h STORE m h
  console.log(store(5)); //CLOSURE PROCESS:- when we called var store=sum(2) it reaches to var sum function and we get hello 2, now we call console.log(store(5)) which goes inside the sum function to the RETURN function and give b=5 and it also access the A=2 and C=4 in return of the RETURN function(because in CLOSURE VALUES ARE RETAINED EVEN WHEN WE CALL TWO FUNCTIONS, FUNCTION INSIDE ANOTHER FUNCTION)


//-----------------------------------------------------------------
//----------------------------------------------------------------
//---------------------------------------------------------------- 


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

//Adding or editing property// 
person.isAdmin = true; //Nothing
person[12] = "VV";
console.log(person[12]);

person["isAdmin"] = false; //fasle
console.log(person.isAdmin);

person.mark = 23; //ADD NEW PROPERTY
console.log(person.mark);

person.age = 31;
console.log(person);
person.age = undefined;
console.log(person);
person.age = null;
console.log(person.age); //null
console.log(person);

//Deleting property
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
      //  const arr4 =[
      //  {name:"ak", no:34},[
      //     //declare two objects
      //     {name:"sos", subjects:"js"},
      //     {
      //        name:"os",  subjects:"literals"
      //     }
      //   ]
      // ];      

      // console.log(arr4[1][0].name);
      // console.log(arr4[0].no);
      // console.log(arr4[1][1].subjects);

//-------------------------------------------------------------
 //OBJECT SPREAD OPERATOR(SPILTS THE ARRAY)
  //spread operator breaks/divides the combined values
 //ARRAY/OBJECTS values SPREAD
//  let person = {
//   name:"VV",
//   age:30,
//   hobbies:["Sports","Cooking"],
//   address:{
//     country:"India",
//     state:"Gujarat",
//     city:"Ahmedabad",
//   },
//   greet:function() {
//     alert("Hi there!");
//   },
// };

// let person2= { ...person};
// console.log(person2==person); //false

// person.profession="Programmer";
// person.hobbies.push("Singing");
// person.address.city="Surat";
// person.address.pin= 310;
// // console.log("person 1",person1); //person1 not defined
// console.log("person 2",person2);
// console.log(person);

// // Restrict affect on inner layer
// let person3 = {
//     ...person,
//     hobbies: [...person.hobbies],
//     address: { ...person.address },
//   };

  // //Alternate way of spread operator
  // let person2 = Object.assign({}, person);

//-------------------------------------------------------------
 //OBJECT DESTRUCTURRING --store a key in multiple 
//  let obj= {
//   name:"CK",
//   age:30,
//   address:"Ahmedabad",
//   hobbies:["sports","singing"],
//  };
// //  obj.hobbies.push("SS");
// //  console.log(obj);

// let address= obj.address;
// let {
//   hobbies,
//   name} =obj;
//   console.log(hobbies); //print Hobbies

//---------------------------------------------------------
//  //THIS KEYWORD 
//refer to current object, with arrow does not refer to current
//  let obj= {
//   name:"CK",
//   age:30,
//   address:"Ahmedabad",
//   getName:function() {
//     return`My name is ${this.name}`;
//   },
// };
// console.log(obj.getName()); 


//-------------------------------------------------------------------
 //PROTOTYPE CONSTRUCTOR -- uses THIS KeyWORD to Declare Variables
 // 1. A constructor is a function that creates an instance of a class which is typically called an “object”.

// 2. In JavaScript, a constructor gets
// called when you declare an object using the new keyword.

// 3. The purpose of a constructor is to create an object and 
// set values if there are any object properties present.

//  function Person() {
//   this.age=30;
//   this.name="CK";
//   this.greet= function() {
//     console.log("Hi, I am "+ this.name + " and I am " + this.age +" years old.");
//   };
// }
// Person.prototype= {
//   printAge() {
//     console.log(this.age);
//   },
// };

////CREATE A OBJECT WITH NEW KEYWORD
// let p = new Person();
// p.greet(); //Y
// p.printAge(); //Y

//-------------------------------------------------------------------
 //CALL, APPLY, BIND
 //Call invokes the function and allows you to pass in arguments one by one.(Function BORROWING)
//Apply invokes the function and allows you to pass in arguments as an array.
//Bind returns a new function, allowing you to pass in a this array and any number of arguments.

//CALL
// let userDetails = {
//   name: "V",
//   age: 44,
//   printDetails: function () {
//     console.log(this.name);
//     console.log(this.age);
//   }
// }
// userDetails.printDetails();

// let userDetails2 = {
//   name: "VX",
//   age: 443,
// }
// userDetails.printDetails.call(userDetails2);


//  let obj= {
//   fname:"ChandraKant",
//   lanme:"Pradhan",
//   age:30,
//   address:"Ahmedabad",
//   formatName:function() {
//     //console.log(this);
//     console.log(`My name is ${this.fname} ${this.lanme}`);
//   },
  // formatName: () => {
  //   console.log(this);
  //     console.log(`My name is ${this.fname} ${this.lanme}`);
  //   }
  // };
    //Access the method directly referring to the Object
    // obj.formatName(); //Y

    // //Access the methods indirectly and later on
    // let formatName = obj.formatName;
    // let { formatName } = obj;
    // formatName = formatName.bind(obj);
    // formatName();// 

    //Access the methods indirectly and immediately
    // formatName.call(obj, 2, 4, 5); 
    // takes parameter with comma separated

    // formatName.apply(obj, [4, 2.6]); // take parameteras an array
 

//------------------------------------------------------------
 //GETTERS and GETTERS
// getters => access properties
// setters => change or mutate the

//  let obj = {
//   set name(val) {
//   if(val.trim() ==="") {
//     this.myName="CK";
//     return;
//   }
//   this.myName=val;
// },
// getname() {
//   return this.myName;
// },
// age:30,
// address: "Ahmedabad",
// formatName:function() {
//   //console.log(this);
//   console.log(`My name is${this.fname}${this.lanme}`);
// },
// };
// obj.name="Chandrakant";
// console.log(obj.name);



//-------------------------------------------------------------
//------------------------------------------------------------
 /*   object   */
//object is like a container of properties.

    //example

        /*
        const obj={
          name:"string", vale:33
        };
        */

/*   array VS  object   */
//array can access using index.
//object can access using string or symbol

//arrays are ordered
//objects are not ordered

     //example(to access all the properties)

         /*
         const obj={
           f1:"hello",
           f2:"everyone",
           f3:"welcome",
           f4:"back to",
           f5:"daily tution"
         }; 

         //using control flow statement

         for (let f in obj){
           console.log(obj[f]);
         }

/* HOW TO ACCESS OBJECTS In DIFFERENT WAYS */
//  let object1 = {
//    a: 'somestring',
//    b: 42,
//  };
//  console.log(object1.a); //something
//  console.log(object1.b); //42
//  console.log(object1["a"]); //something

// /* use this to get values */
//for(const o in object1){
  //console.log(object1[o])
//}; //prints somestring and 42

/* use this to get the keys */
//for(const o in object1){
  //console.log(o);
//} //prints a and b

/* use this to get the key value pairs */
//for (const [key, value] of Object.entries(object1)) {
 //console.log(`${key}: ${value}`);
//} //prints k:v

/* use this to get the array of key value pairs */
//console.log(Object.entries(object1)); //prints [...]

//forkeys:-
//console.log(Object.keys(object1));

//for values:-
//console.log(Object.values(object1));

/* use this to get the keys */
//for(const key of Object.keys(object1)){
  //console.log(`${key}`)
//}; //prints a and b

/* use this to get the values */
//for(const value of Object.values(object1)){
  //console.log(`${value}`)
//}; prints somestring and 42

//-------------------------------------------------------------
//------------------------------------------------------------
/* arrow notation(()=>{}) */

   //always anonymous

   //three way syntax:-
   
    /*
     1.you can omit the function keyword.

     2.if a single parameter then you can omit the parentheses.

     3.if single statement then you can omit the curly Braces.
    */

    //EXAMPLE
    // const add = (a, b) => {
    //   const result = a + b;
    //   return result;
    // }
    // console.log(add(6,6));


   //Shorter parameter syntax, if exactly one parameter is received:
  //  const log= (message) => {
  //   console.log(message);
    
    //Empty parameter parentheses if NO arguments are received:
    // const greet= () => {
    //   console.log('Hi there!');
    // };
    
    //Shorter function body, if exactly one expressionis used:
    // const add= (a,b)=>a+b;
     



/* function */ //parameters are optional
//functions are a block of codes designed to perform a particular task.

    //syntax

        /*function funname(arg, ..., arg){
          statements;
        }*/
        


    //example
     
      /*
      function mahol(){
        console.log("ho");
        console.log("gaya");
      }

      mahol();*/ //call function

   //example with return

      /*
      function mahola(){
        return "ho gaya";
      }

      console.log(mahola);
       //prints Function: mahola because referencing to the function and will not execute the body of the function.
      console.log(mahola());
      */

  //example with return and ()

      /*
      function mahola(){
        return "ho jayega";
      }
      console.log(mahola());*/
      //prints ho jayega

  //example

       /*
       function mahola(){
       return "ho jayega";
       }

       //assigning reference to the variable
        let f =mahola;
        console.log(f());

      //using object with property
        const obj ={f:"mahola"};
        console.log(obj.f);
        */
        

/* Arguments and default argumnets */
    //arguments = parameters
    //pass information to the function 

       //example 

         /*
         function demo(a,b){
      //a and b are formal arguments/parameters
           return (a+b)/2;
         }
         console.log(demo(5,66));
         */  //5,66 becomes actual parameters

    /* Default value for arguments */

       //example
        
          /*
          function f(x){
            return `in function:x=${x}`;
          }
          console.log(f());
        //prints undefined
      
       //example

           function f(x="default"){
           return `in function:x=${x} `;
          }
           console.log(f());
          //prints default, default

       //example

           function f(x=33){
          return `in function:x=${x}  `;
          }
           console.log(f());
        */
          //prints 33, 33, 33

         
/* Anonymous function */
 
      //identifiers(name) are not neccessary

      //declare function as an expression

         //example

          /*
          const f =function(){
            //statements
          }
        //   f();
        //   */
        //  const f = function () {
          
        //  }
        //  f();

        //example(why to use anonymous function)

          /*
          const o ={
            name: "anonymous function",
            //invoke is the method
            invoke(){
              return "who are you?"
            }
          };
          console.log(o.invoke());
          console.log(o);
          console.log(o.name);
          */

          // const o = {
          //   name:"jackk",
          //   invoke(){
          //     return "who are you?"
          //   }
          // };
          // console.log(o.invoke());
          // console.log(o);
          // console.log(o.name);          
         


     
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
             

    

 
          
      
