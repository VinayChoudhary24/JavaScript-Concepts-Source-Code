/*  AJAX(async)  */
//ajax request(xhr files)
//is used to fetch data from the server.

//purpose of AJAX:- to GET data of multiple requests and multiple  users from server without RE-FRESHING the page, with AJAX we don't have to re-fresh the page(GET & POST)

//call AJAX:- we can call ajax with the help of LIBRARIES(PREFERRED) and VANILLA JS.

//XHR request Example:-
    
     //request server
      const url = 'https://jsonplaceholder.typicode.com/users';
    
    //xhr request(in-built XMLHttpRequest)
      const xhr = new XMLHttpRequest();

    //use xhr with different methods
      //use open to start request and pass some arguments, first argument is GET(to get the data) and second argument is the url from which to GET the data
      xhr.open('GET',url);

    //to parse the response(from string to object)  
      xhr.responseType = 'json';

    //to get the data add event
      xhr.onload = ()=>{
    //status code for error:- on the basis of status code we handle the error(message)
      if(xhr.status >= 400){
        console.log('failed');
      }else{
        console.log(xhr.response);
      }      
        //console.log(xhr.status); 
       }
       
    //to hanle the error add event
      xhr.onerror = ()=>{
        console.log('ERROR!!!');
      }

    //use send to send the request to server
      xhr.send();
      
      /*
      //Now, we need to parse the response(from string to object) i.e there are two ways
     //1.
        xhr.onload = ()=>{
          console.log(JSON.parse(xhr.response)); //with the help of this we get the RESPONSE of the server on the console(in the form of STRING)
        }
     //2.use this between xhr.open and xhr.onload
        xhr.responseType = 'json';
        */

