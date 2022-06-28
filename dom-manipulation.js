/* DOM Manipulation */
//all the TAGS in HTML are NODES.
//First step is to get nodes(Elements) from HTML:-

/*  
//A. getElementbyid(get h1):-
   //create a variable to store id
    const storeid = document.getElementById('heading');
    console.log(storeid); //id is always UNIQUE(one) for elements


  //B. getElementbytagname(get h2):-
   //create a variable to store tagname
    const storetagname = document.getElementsByTagName('h2');
    console.log(storetagname); //we will get all the h2 tags(many)  from html     
    console.log(storetagname[0]);
    console.log(storetagname[1]);

  
  //C. getElementbyclassname(get h3):-
   //create variable to store classname
    const storeclassname = document.getElementsByClassName('heading3');
    console.log(storeclassname);
    console.log(storeclassname[0]);
    console.log(storeclassname[1]);


  //D. queryselector and queryselectorAll(very powerful)(always use this)(IT CAN CAPTURE ID, CLASS ETC. FROM HTML)
   //create variable to store queryselector for ID
   const storequeryselectorID = document.querySelector('#heading'); //for ID use #
   console.log(storequeryselectorID);

   //create variable to store queryselector for CLASS
   const storequeryselectorCLASS = document.querySelectorAll('.heading3'); //for CLASS use . and use queryselectorAll if there are more classess with the same name
   console.log(storequeryselectorCLASS);
   console.log(storequeryselectorCLASS[0]);
   console.log(storequeryselectorCLASS[1]);
   */

   /*
//TRAVERSE DOM(body, div, child-parent node)
   //A. Parent Node 
    //create a variable to store and get child node(h1)
     const storechild = document.querySelector('.heading');
    //create variable to store and get parent(div), use property parentNode
     const storeparent = storechild.parentNode;
     console.log(storeparent);


  //B. childNodes
    //create a variable to store and get Parent node(div)
     const parentstore = document.querySelector('.parent');
    //use property CHILDNODES
     console.log(parentstore.childNodes);


  //C. nextelementsibling
   //create variable to store and get h1
    const storeh1 = document.querySelector('.heading');
   //use this property to get the next sibling
    console.log(storeh1.nextElementSibling);


  //D. previouselementsibling
   //create variable to store and get h3
   const storeh2 = document.querySelector('h2');
   //use this property to get the previous sibling
    console.log(storeh2.previousElementSibling);
*/

/*
//Manipulate Elements
   //create variable to store and get heading(h1)(innerHTML)
    const Manipulateh1 = document.querySelector('.heading').innerHTML = 'this is manipulation';
   //add class
    //Manipulateh1.classlist.add('title');
    //Manipulateh1.classlist.remove('title');
*/

/*
//Advance Manipulation(add tags in JS without writting in HTML)
//how to create a new tag and append
   //create elements
    const heading = document.createElement('h1');
    heading.innerHTML = 'putting some text';
  
  //To APPEND, first we get DIV
   const divparent = document.querySelector('.parent');
  
  //now use the property appendchild
   divparent.appendChild(heading);
    console.log(heading);

  //create one more tag(h2)
   const heading2 = document.createElement('h2');
   heading2.innerHTML = 'this is second append';
  
  //get the div tag to append
   const divparent2 = document.querySelector('.parent');

  //now use append child property
   divparent2.appendChild(heading2);
   console.log(heading2);
*/

/*
//DOM EVENTS(very IMPORTANT)
//Handling the Actions Performed(button, click, keys, mouse....)
   //A. CLICK EVENT
     //create div, h1, button in HTML

     //select button and heading by id
      const button = document.querySelector('#btn');
      const heading = document.querySelector('#heading');
    
     //now ADD event to the BUTTON
      button.addEventListener('click', function(event){
      //change the color of heading  
        heading.style.color = 'red';
        heading.style.fontSize = '60px';
       
      //print this in console  
        console.log('event button clicked', event);
      })
*/


//on/off the BULB Example for DOM EVENTS









     





















   

