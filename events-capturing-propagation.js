//event(click) bubbling and capturing
//stop propagation, immediate propagation and prevent default

//create button in div, add eventlistener and put console
   
   /*
   var div=document.querySelector("div");
   var button=document.querySelector("button");

   div.addEventListener("click",()=>{
     console.log("div")
   });
   
   button.addEventListener("click",()=>{
     console.log("button")
   });*/ //it will print BUTTON first and DIV second. //here when the button is clicked we will get div in console THIS IS CALLED EVENT BUBBLING(GOING FROM CHILD-TO-PARENT i.e when the button is  clicked it will go to the parent)



//EVENT CAPTURING:- opposite of bubbling it goes from PARENT-TO-CHILD
   
   /*
   var div=document.querySelector("div");
   var button=document.querySelector("button");

   div.addEventListener("click",()=>{
     console.log("div")
   },true);

   button.addEventListener("click",()=>{
     console.log("button")
   },true);*/ //it will print DIV first and BUTTON second. 


//STOP PROPAGATIOIN:-

   /*var div=document.querySelector("div");
   var button=document.querySelector("button");

   div.addEventListener("click",()=>{
     console.log("div")
   });

   button.addEventListener("click",(event)=>{
     //add STOP PROPAGATION 
     event.stopPropagation(); //after this we will not get div in console. when we get complex and big codes we use stop propagation to stop any event
     console.log("button")  
   });*/


//IMMEDIATE PROPAGATION:-

   /*
   var div=document.querySelector("div");
   var button=document.querySelector("button");

   button.addEventListener("click",(event)=>{
     console.log("button")
   });

  //here, we are adding multiple events to the same button
   button.addEventListener("click",(event)=>{
     event.stopImmediatePropagation();
     console.log("button1")
   });*/


//PREVENT DEFAULT:-
//add href in html(it is used to open a new tab)

    /*
    var div=document.querySelector("div");
    var a=document.querySelector("a");

    a.addEventListener("click",(event)=>{
      event.preventDefault(); //it will prevent new tab from opening i.e it will prevent the default behaviour of href.
      console.log("button")
    })*/










