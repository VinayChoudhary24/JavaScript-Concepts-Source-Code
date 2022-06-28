// Purpose of async and await


  //create array of objects for data(DUMMY DATA)
  const datas = [
    {name:"VC", pro:"AE"},
    {name:"VK", pro:"SE"}
  ];

  //create a function to get data
   function getdatas(){

    setTimeout(() => {
    //create variable to strore output
    let output = "";


      datas.forEach((data,index)=>{
      output+= `<li>${data.name}</li>`
      })
      document.body.innerHTML=output;      
    },1000); //if 1000 change to 5000 it gives the newdata also
   }
    //call function(it will work according to what is written in the settimeout)
    //getdatas();


  //create another function to create data
  /*function createdata(newdata){


    setTimeout(() => {
      
  //pass datas here to insert/push the new data in object DATAS
     datas.push(newdata); 
    },2000);

  }
//call create data and pass anotherobject to insert in the data
createdata({name:"BI",pro:"player"});*/

//getdatas(); //after executing all this still we didn't get newdata(BI and player)BECAUSE for the first function GETDATAS the settimeout is 1second and for second function CREATEDATA settimeout is 2seconds i.e the final data is given by the GETDATAS(); function and it is executed and completed in 1second(DOM collects the value from GETDATAS) and is not giving the time required to the second function CREATEDATA which is 2seconds for completion and THIS IS THE PURPOSE OF USING ASYNC JS PROGRAMMING. we can also use callbacks and pormise.  
//inside the object DATAS, here SETTIMEOUT function is very important and this is the purpose of using  ASYNCH METHOD 




/*use this execution with the help of CALLBACK function to get the newdata object in getdatas:- 
    1. put CALLBACK in the second function parameter i.e(function createdata(newdata,callback)). 
    2. insert CALLBACK() in the settimeout after the DATAS.PUSH(newdata) so when the newdata is already pushed and we call getdatas.
    3. put GETDATAS in the end when calling the second function i.e createdata({name:"BI",pro:"player"},getdatas);
    */
   /*function createdata(newdata,callback){
     setTimeout(() => {
       datas.push(newdata);
       callback()
     },2000);
   }
   createdata({name:"BI",pro:"player"},getdatas)*/ //after execution this code with the help of callback() we will get all the three objects(getdatas and newdata) in DOM(page).
    


/* use this execution with the help of promise method:-
    1.create a promise for the second function.
    2. to get the data create after datas.push:- let error = false;(means no error)
    if(!error){
      resolve();
    }else{
      reject("galat")
    }
    3. use .then() to call GETDATAS:-
    createdata({..........}).then(getdatas)
    */

  /*function createdata(newdata){
    return new Promise((resolve, reject)=>{
 //put settimeout inside promise
    setTimeout(()=> {
        datas.push(newdata);
        let error = false; //put true to reject() and use .catch(err=> console.log(err)) to handle the ERROR
        if(!error){
          resolve();
        } else {
          reject("galat");
        }
      },2000);   
   }) 
 }
 createdata({name:"BI",pro:"player"}).then(getdatas)*/ //.catch(err=>console.log(err))
/*after execution this code with the help of promise() we will get all the three objects(getdatas and newdata) in DOM(page).*/



/*use this execution with the help of Async and Await:-
    1.create a third function(ASYNC function start) to call the second function createdata({name:"BI",pro:"player"}) and put AWAIT(await will wait for the createdata to get completed) before calling it.
    2. now call GETDATAS() below the createdata
    3.call start() 

  */

    /*function createdata(newdata){
      return new Promise((resolve,reject)=>{
   //put settimeout inside promise
      setTimeout(()=> {
          datas.push(newdata);
          let error = false; //put true to reject() and use .catch(err=> console.log(err)) to handle the ERROR
          if (!error) {
            resolve();
          } else {
            reject("galat");
          }
        },2000);   
     }) 
   }

   async function start(){
    await createdata({name:"BI",pro:"player"})
    getdatas();
   }
   start();
   */