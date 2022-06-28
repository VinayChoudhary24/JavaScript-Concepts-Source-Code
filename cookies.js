/* COOKIES FEATURE(NAME&VALUE PAIR)  */
//WHEN A  WEBSITE STORES DATA IN YOUR BROWSER IT IS CALLED COOKIE.
//feature on websites that ask for ALLOW/REJECT COOKIES
//ALLOW COOKIES:- WITHOUT CREATING ANY ACCOUNT ON THE PAGE OR SIGN-UP, IT SAVES OUT  DETAILS LIKE CART, SEARCHES ETC. EVEN IF WE CLOSE THE BROWSER.(it goes into the database because when we allow it  the BROWSER ITSELF stores the CART, SEARCHES, ETC. IN THE BROWSER STORAGE)

 
  /*
  //WHERE COOKIE IS STORED AND HOW TO VIEW:-
   -GO TO THE WEBSITE--> CLICK INSPECT ELEMENT--> GO TO APPLICATIONS-->CLICK ON COOKIES-->NAME&VALUE PAIR ARE COOKIES
   */
  
 //Example:- how to create and store cookie
 //document.cookie = "item=milk";
 document.cookie = "location=india";
    
    //how  to change the EXPIRY(most important parameter) parameter:-
    document.cookie = "item=milk; expires=Sat, 07 may 2022 12:00:00 UTC";

    //how to change cookies:-WANT TO ADD MORE ITEMS
    document.cookie = "item=milk, bread, eggs; expires=Sat, 07 may 2022 12:00:00 UTC";
    document.cookie = "location=udaipur,rajasthan";

    //how to read cookies:-
    let x = document.cookie;
    alert(x); //USE ALERT TO SEE IN THE BROWSER AS A POP-UP MESSAGE

    console.log(x); 

    //HOW TO DELETE COOKIE:-CHANGE THE EXPIRY DATE OF THE COOKIE:-
    document.cookie = "item=milk, bread, eggs; expires=Sun, 01 may 2022 12:00:00 UTC";


     

