/*  polymorphism   */
//concept of object oriented paradigm to perform single action in different forms 
//create variables, methods and objects that have more than one form.
//used to overide properties and methods


    //example

      /*
      //declare parent class
      class employee{
        constructor(name){
          this.name=name;
        }

      //declare a method
      employeename(){
        console.log(`employee name: ${this.name}`);
      }
    }

      //inherit parent class
      class member extends employee{
        constructor(name, salary){
        super(name); //call parent class constructor with child class parameter.
        this.name=name;
        this.salary=salary;
        }
      

      //override employeename() method of parent class
      employeename(){
        console.log(`employee Name: ${this.name} and salary: ${this.salary}`);
      }
    }

      //create instance of the class
      const mb=new member("pat", 55000);
      mb.employeename();
      */


/*   string representation   */
//convert object into string
//object.tostring();

    //example

     /*
     //call date object
     const dt=new Date();

     console.log(dt);
     console.log(dt.toString());

     console.log(typeof dt.toString());
     console.log(typeof dt);
     */
