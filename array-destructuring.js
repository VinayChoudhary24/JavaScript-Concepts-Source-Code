/* Array Destructuring */
//destructuring makes it possible to UNPACK VALUES from arrays.
   
   //Example:-
      /*
      let a,b,rest; //declare
      [a,b]=[10,20]; //initialize
    console.log(a); //10

    console.log(b); //20

    [a,b,...rest]=[10,20,30,40,50]; //add more values to the array using rest

    console.log(rest);
    */

  //Example:-

      /*
      const foo=['one','two','three']; //initialize
      const [red,yellow,blue]=foo; //re-assigning the value of red,yellow,blue to FOO i.e already assigned to 'one','two','three'

      console.log(red); //one
      console.log(yellow); //two
      console.log(blue); //three
      */

  //Example:-

      /*
      const foo = ["one","two"]; //initialize

      const [red,yellow,green,blue]=foo; //assigning the values too FOO but we initialized only TWO values

      console.log(red); //one
      console.log(yellow); //two
      console.log(green); //undefined
      console.log(blue); //undefined
      */

  //Example:-

     /*
     let a,b; //declare
     [a=5,b=7]=[1,2]; //initializing on left side but re-assigning on the right side again

     console.log(a); //1, the value of a got updated
     console.log(b); //2, the value of b got updated
     */

  //Example:-

     /*
     const arr=[1,2,3]; //initialized
     [arr[2],arr[1]]=[arr[1],arr[2]]; //here we we re-assign the values with indices i.e replacing 2 index with 1 and 1 index with 2 index.

     console.log(arr); //prints [1,3,2]
     */
 
      
  //Example:-

     /*
     function parseprotocol(url){
       const parsedURL= ......arguments(URL);

       if(!parsed url){
         return false;
       }
     }
     */

     

