/*   prototype  */
//PROPERTIES HIDDEN INSIDE THE OBJECTS ARE CALLED PROTOTYPE i.e when we get print in console tyere are many properties hidden (WHICH WE CAN USE) they are called prototypes. 
//OBJECT IS AN PROTOTYPE IN ITSELF
//when refering to a method available in a instance of class.
// dynamic dispatch using prototype chain
//every function has a special property 
//important for function that act has constuctor.

  //Example:-

      /*const obj=new Object({
        name:"ajay"
      })
      const obj=new obj();
      const obj={
        name:"VC"
      }*/

  //create an object
  const obj1={
    name:"VC"
  }
  //console.log(obj1);

  const obj2={
    roll:1,
    __proto__:obj1 //now obj1 is a prototype of obj2
    //now we can access obj1 properties in obj2 
  }
  //console.log(obj2.name)

  const obj3={
    class:"MSC",
    __proto__:obj2
  }
  console.log(obj3.class);
  console.log(obj3.roll);
  console.log(obj3.name);
  //THIS IS WHAT WE ALSO CALL PROTOTYPE INHERITANCE

  Array = ["ONE", 1];
  console.log(Array); //here, we can access all the hidden properties of this array

  const object=new Object();
  console.log(object); //same for the object also


  
    //example to ADD something in FUNCTION WITH PROTOTYPE

          /*
          let f = function(){
            this.a=1; //property a
            this.b=2; //property b
          }

          let o = new f(); //created instance of the function using new keyword
          o.d=5; //create property using instance

          //now create prototype property
          f.prototype.b =3; //override property b if it is not exist
          f.prototype.c =4;  //created prototype c property
          
          console.log(o.a);
          console.log(o.b);
          console.log(o.c);
          console.log(o.d);

          //call object
          console.log(o);

          //call function
          console.log(f);

          //prototype method
          console.log(f.prototype);
          */

