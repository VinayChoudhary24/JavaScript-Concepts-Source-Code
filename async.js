/*    Async   */
//async function always returns a promise, it works like promise only but you dont have to declare RESOLVE and REJECT in functon
   //syntax:-
       //add async in the start of the function

    //example:-

    /*    
    async function test(){

        }; */

    //example for async
        /*
        async function test(){
          return "hello";
        }
        test().then((response)=>{
          console.log(response);
        });
        */
       
        /*
          let test= async function(){
            return "hello";
          }
          test().then((response)=>{
            console.log(response);
          });
          */

          /*
          let test= async ()=>
             "hello";
          test().then((response)=>{
            console.log(response);
          });
          */


    //example for await(use await when we want to fetch the data from the server)(it works under the async function)(when await is called it stop the execution of that particular line/statement and will move to the next line and will complete the full execution and then it will execute that await line/statement)

     //example of await
        /*
        async function test(){
        console.log("two");
        await console.log("three");
        console.log("four");
        };
        console.log("one");
        test();
        console.log("five");
        */

    //example of await with fetch("")
         
         /*
         async function test(){
         console.log("two");
         const response= await fetch(`https://randomuser.me/api/
         `);
         console.log("three");
         const people= await response.json();
         return people;
         };
         console.log("one");
         let a=test();
         console.log("four");
         console.log(a);
         */

         /*
         async function test(){
           const response= await fetch(`https://randomuser.me/api/`);
           const people= await response.json();

           return people;
         }
         test().then((data)=>{
           console.log(data);
         }).catch((error)=>{
           console.log(error);
         });
         */

   //example using try and catch      
         
         /*
         async function test(){
           try{
             const response = await fetch(`https://randomuser.me/api/`);
             const students = await response.json();

             return students;
           }catch(error){
             console.log(error);
           }
         }
         test().then((dat)=>{
           console.log(dat);
         });
         */
         
        





        

         








