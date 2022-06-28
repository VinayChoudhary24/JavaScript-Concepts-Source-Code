/* --What is Promise:-
A promise is an object that returns a value which you hope to receive in the future, but not now.(complex statements and processess that are left behind during the JS execution)
Example-- 
    
     let promise = new promise(function(resolve, reject){
       executor(pending process)
     });

--Why need promise:-
JS is always synchronous and single threated language. it means JS never wait for code or function result when they take some time, JS direct execute next code
Example:-

     let data = new promise(function(resolved, rejected){
       resolved("done")
       //rejected("hello")
     });
     data.then((resp)=>{
       console.warn("resp", resp)
       return resp;
     })
     */

//Different basic examples for error handling:-
  
     /*
     let data=1;
     console.log("data");
     data=2;
     //use settimeout to delay
     setTimeout(()=>{
     console.log("timer", data);
     },2000)//2000 for 2 seconds delay

     data=3;
     console.log("last", data);
     */


     /*
     let data=new Promise((resolve,reject)=>{
  //use settimeout for the complex codes which will take time     
      setTimeout(()=>{
        resolve("code has been executed");
      },2000);
     });
  //use then to show/print the resolved   
     data.then((item)=>{
       console.log(item);
     });
     console.log("this code will exxecute before the code in promise");
     */

     
     /*
     let data=new Promise((resolve,reject)=>{
      //use settimeout for the complex codes which will take time     
          setTimeout(()=>{
            reject("some issues");
          },2000);
         });
      //use then to show/print the resolved   
         data.then((item)=>{
           console.log(item);
         }).catch((err)=>{
           console.log("catch block", err)
         });
         console.log("this code will exxecute before the code in promise");
         */


         /*
         let data1=new Promise((resolve,reject)=>{
           setTimeout(()=>{
             reject(10);
           },2000); 
         }); 
      //used when dosent matter it gets resolve or rejected
         data.finally((item)=>{
           console.log("final block");
         });
         */


         /*
         let data=new Promise((resolve,reject)=>{
           setTimeout(()=>{
             throw new Error("data issues");
           },2000);
         });

         data.then((item)=>{

           throw new Error("data issues")
           console.log("then block", item);
         }).catch((err)=>{
           console.log("catch block", err);
         });
         */


         /*
         let data=new Promise((resolve,reject)=>{
          setTimeout(()=>{
            resolve("done");
          },2000);
        });

        data.then((item)=>{

          throw new Error("data issues")
          console.log("then block", item);
        }).catch((err)=>{
          console.log("catch block", err);
        });
        */


  //Example to call API

      /*
      let data=fetch("https://randomuser.me/api/");

    //to get the data from the api
    data.then((people)=>{
      console.log(people);
    //to get the second promise inside a promise(also called promise chaining i.e resolve result of one promise into another)
     return people.json()
    }).then((result)=>{
      console.log("second output", result);
    });
    */

  //Example for promise.all(used when 3-4 promise running parallel)(the output comes after all promise are executed and if anyone fails to execut, promise.all returns failure)
  
     /*
     let data=Promise.all([
       new Promise((resolve,reject)=>{
         setTimeout(()=>{
           resolve("two second");
         },2000);
       }),
       new Promise((resolve,reject)=>{
         setTimeout(()=>{
  //if here its REJECT        
          resolve("one second");
         },1000)
       }),
       new Promise((resolve,reject)=>{
         setTimeout(()=>{
           resolve("four second")
         },4000);
       })
     ]);
     data.then((item)=>{
      console.log("then block", item);
     }).catch((err)=>{
      console.log("catch block", err);
     });     
      //promsie.all will give the result after four seconds i.e  it will execute all the promise and give output.(gives an array of outputs)(*if any one promise is REJECTED, it will give the reject one in output and will not display the RESOLVED ones)
      */


  //Example for promise.allsettled(used when 3-4 promise)(gives the output and describes which one is executed and which one is failed)

    /*
    let data=Promise.allSettled([
     new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve("two second");
      },2000);
    }),
     new Promise((resolve,reject)=>{
      setTimeout(()=>{
  //here we put REJECT        
        reject("one second");
      },1000)
    }),
     new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve("four second")
       },4000);
     })
   ]);
    data.then((item)=>{
     console.log("then block", item);
    }).catch((err)=>{
     console.log("catch block", err);
  }); //it will give the output for all promise and describes which one will be FULLFILLED and REJECTED.
  */


  //Example for promise.race(gives the output for the one executed the fastest)

     /*
     let data=Promise.racea([
       new Promise((resolve,reject)=>{
         setTimeout(()=>{
           resolve("two second");
         },2000);
       }),
       new Promise((resolve,reject)=>{
         setTimeout(()=>{        
          resolve("one second");
         },1000)
       }),
       new Promise((resolve,reject)=>{
         setTimeout(()=>{
           resolve("four second")
         },4000);
       }) 
     ]);
     data.then((item)=>{
      console.log("then block", item);
     }).catch((err)=>{
      console.log("catch block", err);
     }); //it will print the only one which is executed fastest.
     */

  //Example for resolve and reject at same time

      
      /*
      let data=new Promise((resolve,reject)=>{
        setTimeout(()=>{
  //put resolve first, then execute
          resolve("one")
          reject("one")
        },2000)
      })
      data.then((item)=>{
        console.log("resolve", item)
      }).catch((err)=>{
        console.log("reject", err)
      }); //prints resolve because resolve is executed first(written first). 
      */


      /*
      let data=new Promise((resolve,reject)=>{
        setTimeout(()=>{
  //put reject first, then execute
          reject("one")
          resolve("one")
        },2000)
      });
      data.then((item)=>{
        console.log("resolve", item)
      }).catch((err)=>{
        console.log("reject", err)
      });
      */

      

      


     


