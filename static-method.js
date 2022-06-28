 /*   static methods  */
//cannot call/access on instance of the class
//static methodname(){statements}
//called on the class itself.
//used to create utility functions

    //example

        /*
        class staticclassmethod{
          static oncall(){
            return "this is a static method";
          }
        }

        //call static method
        console.log(staticclassmethod.oncall());
        */

    //example with two static methods

        /*
        class staticclassmethod{
         static oncall(){
          return "this is a static method";
         }
         static oncall2(){
           return `${this.oncall()} called using another static method`;
         }
       }

        //call static method
        console.log(staticclassmethod.oncall2());
        */

    //example of executing static method using instance of the class

    /*
    class staticclassmethod{
      //declare a constructor
      constructor(){
        //console.log(staticclassmethod.oncall());
        console.log(this.constructor.oncall());
      }

      static oncall(){
        return "this is a static method";
      }
    }

    //create instance for demo
    const st= new staticclassmethod();
    */

