/* array */

//different types of array literals:-

   /*
   1.simple Array, array of numbers 
   const arr1 =[1,2,3,4,5];

   2.non-homogeneous array literal
   const arr2 =["one", 3, true];
   
   3.array containing array(2Dimensional arrays)
   const arr3 =[["one", "three"],[1,57,67]];

   //nonhomogeneous array containing array
   4.const arr4 =[
      {name:"ak", no:34},[
         //declare two objects
         {name:"sos", subjects:"js"},{
            name:"sos", subjects:"literals"
         }
      ]
   ];

   //array containing array with function
   5.const arr5=[{
      name:"jss", videos:o2o3
   },[

      //on 0 index of inner array
      function(){
         return "containing array";
      },
      //on 1 index of array
      "three"
   ]
];
*/

/* access array elements */

   //example

      /*
      const arr1 =[1,2,3,4,56,7];

      console.log(arr1[5]);
      */

   //example for 2D

       /*
       const arr3 =[["one", "three"],[1,57,67]];
       console.log(arr3[0][0]);
       */
       
4
    //example for objects

      /* 
       const arr4 =[
       {name:"ak", no:34},[
          //declare two objects
          {name:"sos", subjects:"js"},{
             name:"os",  subjects:"literals"
          }
        ]
      ];      

      console.log(arr4[1][0].name);
      console.log(arr4[0].no);
      console.log(arr4[1][1].subjects);
      */
      

   //example for functions

       /*
       const arr5=[{
         name:"jss", videos:1213
        },[

       //on 0 index of inner array
         function(){
           return "containing array";
        },
         //on 1 index of array
         "three"
        ]
     ];
     console.log(arr5[0].name);
     console.log(arr5[1][0]());
     console.log(arr5[1][1]);
     */
 
     

/* ADD & REMOVE elements from array */
//Beginning refers to 0 index.
//End refers to arrayname.length -1.

//pop, push, shift and unshift(all these methods return new array)

//1. PUSH method(ADDS element at the end.)
  
     //example

        /*
        const arr=[2,3,4];

        console.log(arr.push(5,8));
        console.log(arr);

        //PUSH a string
        console.log(arr.push("one"));
        console.log(arr);
        */
 
//2.POP(removes the last element from the array)

     //example

         /*
         const arr=[2,3,4];

         console.log(arr.pop());
         console.log(arr);
         */

//3. unshift(adds elemet at the beginning)

     //example

         /*
         const arr=[2,3,4];

         console.log(arr.unshift(5));
         console.log(arr);
         */

//4.shift(remove element from the beginning)

      //example

         /*
         const arr=[2,3,4];

         console.log(arr.shift());
         console.log(arr);
         */









        
   
     
   

   
       
