/*    inheritance   */
//mechanism that allows us to create new classes on the basis of already existing classes.
//create child class of the => parent class.
//gives flexibility to the child class to reuse the methods and variables of thhe parent class
//use EXTENDS keyword to create child class and SUPER() method to call the constructor of the parent class.

     //exxample
     /*1. create parent class => person => proprty => fname, lname.
     2. child class => age => property => age
     */

     /*
     //create parent class
     class person{
       constructor(fname, lname){
         this.fname = fname;
         this.lname = lname;
       }
     }

     //create child class
     //extends parent class
     class age extends person{
       constructor(age){
         //call super() method
         super("harney", "lorty"); //will call constructor of the parent class
         this.age = age;
       }

       //create method to display fname, lname and age
       showup(){
         console.log(this.fname + " " + this.lname);
         console.log(`your age is ${this.age}`);
       }
     }

     //create instance of the child class
     const d = new age(23);
     d.showup(); //call child class method showup()

     //we can also access parent class properties using child class instance

     console.log(d.fname);
     */

