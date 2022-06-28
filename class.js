/*    class  */

    //syntax

        /*
        class model{ //model is the name of the class
          constructor(){
            //body
          }
        }

    
    //create instance of class
       const obj1=new model();
       const obj2=new model(); //multiple instance of the class

    //use of instanceof keyword

    console.log(obj1 instanceof model); //prints true
    */

    //example

        /*
        class model{
          constructor(Mno,Mname){ //Mno and Mname are parameters
            //this.Mno=Mno and this.Mname=Mname are properties
            //assigning values to properties from parameters
          this.Mno=Mno; 
          this.Mname=Mname;
         }
       
      
      //create method
          Show(){
            console.log(`model number:${this.Mno}, model name:${this.Mname}`);
          }
        }

      //create instance of class
          const obj1=new model(234,"nin");
          obj1.Show();

          const obj2=new model(476,"asf");
          obj2.Show();
        */

