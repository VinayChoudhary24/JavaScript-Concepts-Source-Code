/*  Events   */
//Action performed by the user.
//there are 200 types of events in JS.
//Using events we can perform different operations on HTMl elements.
//we can also create different types of animations using events

/* 1. Click event
 --used to click a button or form submission and validation(stimulates the mouse/keypad click).

 --To call click event in HTML we use ONCLICK atribute.
 */

   //example(call function in click-event.html)(ADD function name with ONCLICK)

     //declare function

      /*
      function display(){
        document.querySelector(".para").innerHTML="this is maholl!!"
      }
      */

  //Example(create click event using JS without any HTML attribute)(using addEventListener() we can call any JS event)(create class="btn" in HTML)


     
     /*
     document.querySelector(".btn").addEventListener("click", //event name,
      //action,
      function(){
       document.querySelector(".para").innerHTML="this is addeventlistener"//for styling just comment this statement and use this:-

       //style paragraph
       document.querySelector(".para").style.fontsize="3em";

       document.querySelector(".para").style.color="tomato";
     });
     
       
/* 2. Focus(event is fired when HTML element has recieved focus) and Blur(event is fired when the HTML element loss focus)(these two events are very important when you wanted to validate input text boxes using JS)
 --in focus-blur.HTML create a form with two text boxes(1.using division tag to create a form ID and 2. focus and blur event when to change background color)
*/

    //Example

      /*
      //create focus event
       let form=document.getElementById("form");//select division tag using its ID
       */

       
       /*
       //addEventlistener to the ID to call faocus event first
       form.addEventListener("focus", //event,
        //handler
        function(event){
          //use target property of event object to get current element(event.target)
          console.log(event.target);
       },true ); //this boolean indicates that the listener should be invoked at most once after being added, if true the listener would be automatically removed when invoked
       */
       
       
       /*
       //use this target property to change the background color of the text box 
       form.addEventListener("focus", function(event){
         event.target.style.background="lightblue"; 
       })


       //create blur event(to remove the background color and specify default style ) 
       form.addEventListener("blur", function(event){
         event.target.style.background= " ";
       }, true ); //will cahnge text box background color
       */   