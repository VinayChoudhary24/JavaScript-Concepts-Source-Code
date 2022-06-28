/*   prototype inheritance   */
//objects inherit the properties of objects with the help of __proto__: xxx and xxx.__proto__=xxx property... is prototype inheritaance
//JS will access this without methods also.
//object__proto__

    
    //example

      /*  
        let car ={
          wheel:"four",
          model:"tesl",
          //declare a method
          show(){
            console.log(`car model ${this.model}, have ${this.wheel} wheel`);
          }
        };

      //declare another object
        let bike ={
          cc:2376
        };

      //specify __proto__ property to bike object
      bike.__proto__= car;
      console.log(bike);

    //access bike property
      console.log(bike.cc);

    //access car property using bike object
    console.log(bike.wheel);
    console.log(bike.model);
    
    //access the method above
    bike.show();
    */

/*   prototype chain  */

     //example

        /*
        let car ={
          wheel:"foura",
          model:"telsa",
          //declare method
          show(){
            console.log(`car model ${this.model}, have ${this.wheel} wheel`);
          }
        };

      //declare another object bike
        let bicycle ={
          gear:5,
          __proto__: car //created __proto__property of bicycle and specify car object
        };

      //access car object show() method
      bicycle.show();
      console.log(bicycle); //prototype chain
      */
      



        
