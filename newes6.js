/*  copywithin() and fill()  */

/*  copywithin()  */
//copies a part of array to another location in the same array and returs.
//overwrites

    //syntax

      /*
      Arr.copywithin(target,start,end)
      //target parameter is required, use is at which to copy the sequence
      //the negative value counts from the end i.e right to left.
      //does not change the size of the array.
      */

    //example
  
        /*
        const arr=[1,2,3,4,5];

        arr.copyWithin(1,2); //start from the 1 index, copying from the 2 index

        console.log(arr); //returs [1,3,4,5,5] prints 5 two times to complete the length of the array.
        */

     //example

        /*
        const arr=[1,2,3,4,5];

        arr.copyWithin(1,2,3); //start from the 1 index, copying from the 2 index, end copying on 3 index.

        console.log(arr);
        */

     //example

        /*
        const arr=[1,2,3,4,5];

        arr.copyWithin(2,0); //start from the 1 index, copying from the 2 index

        console.log(arr);
        */

     //example

        /*
        const arr=[1,2,3,4,5];

        arr.copyWithin(1,-1); //

        console.log(arr);
        */

/*   fill() method   */
//allows you to get any number of elemetns with a fixed value

      //syntax

         /*
         Arr.fill(value,start,end);
         //value parameter fills array with static value
         */

      //example

          /*
          const arr=[1,2,3,4,5];

          arr.fill("d"); 
          console.log(arr); //prints ['d', 'd', 'd', 'd', 'd'];
          */

      //example

      /*
      const arr=[1,2,3,4,5];

      arr.fill("d",1);
      console.log(arr); //prints [1,'d', 'd', 'd', 'd'];
      */

      //example

      /*
      const arr=[1,2,3,4,5];

      arr.fill("d",1,3);
      console.log(arr); //prints [1, 'd', 'd', 4,5];
      */

         



       











