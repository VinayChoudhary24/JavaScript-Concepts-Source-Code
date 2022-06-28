/*   AJAX   */
//AJAX is  a technique for creating fast and dynamic web pages.
//we use XMLhttprequest goes to the background of the server and server give the data(RESPONSE) back the client without refreshing the webpage is the process of AJAX
/* Data is in three formats:-
  1. text file
  2. XML data
  3. JSON data 
  */
 /* READY STATE(5 steps):-
   1. 0:request not initialized(no request to the server i.e neutral mode)
   2. 1:ser connection established(we connect the local system with the server)
   3. 2:request received(by the server)
   4. 3:processing request(server process)
   5. 4:request finished and response is ready
   RESPONSE:- has STATUS and RESPONSE TEXT or RESPONSE XML
   */
/* Status codes meaning:-
200-"OK"
403-"forbidden"
404-"not found"
*/ 
//A- asynchronous
//S- JS
//a- and
//X- XML(it is a data format) 
/* How to code AJAX in JS:-
   step 1. use var xhttp = new XMLHttpRequest(); (for request)
   step 2. Method to get the file from the server
        (a) xhttp.open("GET"(is a method),"filename.txt"(its a path),true(asynch mode));

        (b) xttp.send(); 
    */

  /* check ready state:-
   xhttp.onreadystatechange = function(){
     if(this.readystate==4&&this.status==200){
       document.getelementbyid("demo").innerHTML=this.responseText;
     } 
   };
   */

  //example:-

      
      var xhttp=new XMLHttpRequest();

      xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
          document.getElementById("demo").innerHTMl=this.responseText;
        }
      };
      xhttp.open("GET","filename.txt",true);
      xhttp.send();
    

   