/*
//accessing paragraph using getElementByid() //create class called para
let para = document.getElementByid("para"); //specify id as an argument
//console.log(para);


//set or get element text using innerHTML property
para.innerHTML = "this is DOM tutorial"; 


//using javascript  chaining
document.getelementbyid("para").innerHTML = "this is DOM tutorial";


//do the same thing using getelementbytagname() method
let p = document.getElementsByTagName("p");
console.log(p);
*/


/* DOM css selector  */
//create div(<div>) element in the HTML document
//document methods:-(1). Queryselector() (2). QueryselectorAll() 

  //example using queryselector

     /*
     let para = document.querySelector(".para"); //returns the first matching element 
     console.log(para);

     para.innerHTML="paragraph";
     */

  //example using queryselectorall

    /*
    let para = document.querySelectorAll(".para"); //returns nodelist object
    console.log(para); //contains collection of nodes 
    
    
    //to access these nodes we use square brackets[] and index number
    para[0].innerHTML = "paragraph";
    */

/* Styleing HTML elements using JS  */
//special property called element.style.styleproperty="value";

  //example

     /*
     let sub = document.querySelector(".submit");

     //styleing  properties are case sensitive
     sub.style.backgroundcolor ="white";
     sub.Style.color = "white";
     sub.Style.fontsize = "3em";
     sub.Style.padding = "1.5em";
     */

//to style the HTMLelement using CSS, we need to create a class .html(helpful when working with events)

   //example

     /*
     let sub = document.querySelector("input[type=submit]");

     //add class using add() method
     sub.classList.add("submit");
     */


/*   new dom elements(node) through JS   */
//create a div class="content" in .html
//syntax:- Element.createElement(tagName);
//create two paragraph in dom.js

   //example

    /*
     //create two paragraph
      let p1=document.createElement("p");
      let p2=document.createElement("p");

     //specify some demo text using textcontent property
     p1.textcontent="first paragraph";
     p2.textcontent="second paragraph";

     //append paragraph to the DOM using appendchild() method
     const content=document.querySelector(".content");
     content.appendChild(p1);
     //content.appendChild(p2);

     //append paragraph to the body
     document.body.appendChild(p1);
     */

/* specify attribute to the html elements using setattribute() method */
/*  
  p1.setattribute("class", "para1");
  //update attribute value only
  p1.setattribute("class", "para");

  //remove attribute
  p1.removeattribute("class");
  */

 







