/* let and var */

   //VAR example

      /*
      for(var i=0; i<3; i++){
        //inside the block
        console.log(i);
      }

      //outside the block
      console.log("bahar se access kr liya isne:" + i);
      */
      //var does not show error and can access outside of the inner block when invoked from outside of the block.

   //LET example

      /*
      for(let k=0; k<3; k++){
        //inner block
        console.log(k);
      }
      //outside block
      console.log("bahar se access nhi hua:" + k);
      */
      //let prints error, cannot access the k variable outside of the inner block when invoked from the outside block.