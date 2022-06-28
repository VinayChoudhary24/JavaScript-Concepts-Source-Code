/* there are three stages in Promise Method():-
//in promise we check if thecondition is fullfilled OR not.
    1. Pending

    2. Fullfilled:- for fullfilled condition use Resolve() and if the condition is fullfilled use then()[it is a built in callback function]

    3. Reject:- for reject condition use Reject() and if condition is not fullfilled use Catch()[it is a build in callback function]
*/

/* how to use promise:-
1.declare a variable let X(anything)
2.define it NEW method and name(PROMISE).
3.define a function inside the promise().
4. use two parameters
5. put a condition in promise function to call resolve and reject
6. use two more callback functions .then and .catch to call resolve and reject conditions
7. after getting the promise(value) create two functions to store
   1.let onfullfillment
   2.let onrejection
   and now we use two callback functions then and catch
8. For PENDING stage Add "console.log(fetching data please wait...)" and put the conditions(IF,ELSE OR ANY) in SETTIMEOUT() function  
*/

   //Example of syntax

      /*
      -let prom = new Promise();

      -let prom = new Promise(function(){

      })

      -let prom = new Promise(function(resolve, reject){

      })

      -let prom = new promise(function(resolve, reject){
        if(condition){
          resolve(put a success message here for .then);
        } else{
          reject(put a message here for .catch);
        }
      });
      .then(resolve)
      .catch(reject)
      */ 

  //example to the value of variable COMPLETE is true:-

     /*
     let complete = true;

     let prom = new Promise(function (resolve,reject){
       if(complete){
         resolve("success");
       }else{
         reject("failure");
       }
     });
     //use console.log to call prom object
     console.log(prom);
     */

  //example for function:-

     /*
     function prom(complete){
//for function we dont need any let variable, we use RETURN
      return new Promise(function (resolve,reject){
       if(complete){
         resolve("success");
       }else{
         reject("failure");
       }
     });
    }
    let onfullfillment = (result)=>{
      console.log(result);
    }
    let onrejection = (error)=>{
      console.log(error);
    }
    prom(true).then(onfullfillment);
    prom(true).catch(onrejection);
     //use console.log to call prom object
     //console.log(prom(true));
    */

  //example for SETTIMEOUT()-

     /*
     function prom(complete){
//for function we dont need any let variable, we use RETURN
       return new Promise(function (resolve,reject){
         console.log("Fetching data, please wait...")
         setTimeout(()=>{
          if(complete){             resolve("success");
        }else{
          reject("failure");
        } 
         },4000)      
        });  
      }
        //let onfullfillment = (result)=>{
       //  console.log(result);}
        //let onrejection = (error)=>{
          //console.log(error);}

        //prom(true).then(onfullfillment);
        //prom(true).catch(onrejection);

  //use chaining method to put then and catch in one line so that it doesn't appear twice in console and put (result)=>{console.log(result); inside .the() and (error)=>{console.log(error); inside .catch to remove the two functions i.e onfullfillment and onrejection.
      prom(true).then((result)=>{
        console.log(result)
      }).catch((error)=>{
        console.log(error); 
      });
      */

  //example for two Values:-

  /*
  //take two variables a, b for two values   
   function prom(a, b){
     return new Promise(function(resolve,reject){
       console.log("fetching data please wait...");
  //create another variable to store the value of those two variables
    var c = a/b;
    setTimeout(() => {
  //pass the a and b variable here   
      if(a,b){
   //put the result stored variable here in resolve also     
       resolve(`Answer is: ${c}`);
     }else{
       reject("failed to calculate");
      }
     }, 4000);
    });
   }     
  //pass the actual parametersfor the two values
  prom(6,2).then((result)=>{
    console.log(result);
  }).catch((error)=>{
    console.log(error);
  });
  */
      
      

     
 
     
