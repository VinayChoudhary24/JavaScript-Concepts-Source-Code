//new feature after HTML5(LOCAL AND SESSION)
//stored in key, value pairs


  //HOW TO VIEW LOCAL AND SESSION STORAGE:-
   //-->application-->local and session


//how to set local storage:-
 localStorage.setItem('name', 'vc');
 localStorage.setItem('location', 'udaipur');
  
//how to get items:-local storage
console.log(localStorage.getItem('name'));

//remove item:- local storage
localStorage.removeItem('name');



//how to set session storage:-
sessionStorage.setItem('name', 'vc');
sessionStorage.setItem('location', 'udaipur');

//how to get items:-local storage
console.log(sessionStorage.getItem('name'));

//remove item:- local storage
sessionStorage.removeItem('name');