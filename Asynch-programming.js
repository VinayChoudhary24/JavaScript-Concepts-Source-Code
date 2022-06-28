//Settimeout is used for Asynch programming.

//Uses of Asynch:-1. DOM(ADDEVENTLISTENER) is a asynch call and gets registered in WEB APIS.
    //2. SERVER REQUEST 

//check website latentflip.LOUPE for a little visualisation to help you understand how JavaScript's call stack(it checks the code for asynch and synch, Asynch is not executed first in CALLSTACK)/event loop/callback QUEUE interact with each other.


     //Example
     
        console.log('EXECUTED FIRST'); 
        
        setTimeout(()=>{
          console.log('i am settimeout EXECUTED THIRD');
        }, 0)

        console.log('EXECUTED SECOND');
     //A Browser includes CALL STACK, WEB APIS and CALLBACK QUEUE:- console.log goes inside the--> CALLSTACK(it gets executed inside) i.e executed first goes inside and than executed second and than the settimeout function goes inside --> WEB APIS i.e running in parallel(5000 TIMER) with the CALLSTACK, from web apis  it goes inside(WHEN THE TIMER ENDS IT IS PUSHED IN CALLBACK) --> CALLBACK QUEUE and than inside --> CALL STACK and gets executed
