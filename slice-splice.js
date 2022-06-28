/* concat() method */
//return array element at the end of the array.
//return original array.

    //example

        /*
        const arr=[2,3,4];

        console.log(arr.concat(1,5,6));
        console.log(arr);*/
        

/*    slice() method   */
//retrun subarray.
//take two arguments array.slice(arg1,arg2);
//arg1:- starting of subarray
//arg2:- ending of subarray.
//allows to specify negative indices, when counting array index from the end.

//example

    /*
    const arr =[1,2,3,4,"five"];

    console.log(arr.slice(2));  //start from the third element.

    console.log(arr.slice(1,3)); //start from second and end at the thrid element.

    console.log(arr.slice(-1)); //start from the end of the array.
    
    console.log(arr.slice(-2));
    */
    


/*   splice() method   */
//allows to do in-place modification of the string.
//allows to add and remove elements at any position.
//first argument is where to modify.
//second argument is the number of elements to remove.
//remaing argument is the number of elements to add.


     //example
 
         /*
         const arr=[1,2,4,6,7];
         
         //call splice() method
         //arr.splice(0,3);
         //arr.splice(2,0,2);
         //console.log(arr.splice(2,2,5,"a"));
         //here
         (arr.splice(2,0,3)); //2 is from where to modify i.e 4, 0 is number of elements  to delete i.e zero, 3 is the element to add, prints [1,2,3,4,6,7]

         //again arr.splice(4,0,5); same process will be followed, prints [1,2,3,4,5,6,7]

         console.log(arr);
         */
         
    



    
