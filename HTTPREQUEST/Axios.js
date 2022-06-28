/* Axios  */

function myAxios(method, url){
  //xhr request(in-built XMLHttpRequest)
    const xhr = new XMLHttpRequest()


  //use xhr with different methods
    //use open to start request and pass some arguments, first argument is GET(to get the data) and second argument is the url from which to GET the data
    xhr.open('method',url);

  //to parse the response(from string to object)  
    xhr.responseType = 'json';

  //add this to change the content type:-from text plain to JSON
    xhr.setRequestHeader('content-type', 'application/json');  

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
}
//request server
const url = 'https://jsonplaceholder.typicode.com/users';

//call axios
myAxios('GET',url);

//to POST the data:-
function myAxios(method, url, body=null)

myAxios('POST', url, {
  name:"vc",
  job:"ae"
});

xhr.send(JSON.stringify(body));

/*
//ADD PROMISE to axios/xhr like this:-put all the content insede the  promise
function myAxios(method,url,body=null){
  return new Promise((resolve,reject)=>{
    //xhr request(in-built XMLHttpRequest)
    const xhr = new XMLHttpRequest();


  //use xhr with different methods
    //use open to start request and pass some arguments, first argument is GET(to get the data) and second argument is the url from which to GET the data
    xhr.open('method',url);

  //to parse the response(from string to object)  
    xhr.responseType = 'json';

  //add this to change the content type:-from text plain to JSON
    xhr.setRequestHeader('content-type', 'application/json');  

  //to get the data add event
    xhr.onload = ()=>{
  //status code for error:- on the basis of status code we handle the error(message)
    if(xhr.status >= 400){
      reject(xhr.response)
      console.log('failed');
    }else{
      resolve(xhr.response);
    }      
      //console.log(xhr.status); 
    }
     
  //to hanle the error add event
    xhr.onerror = ()=>{
      reject(xhr.response);
    }

  //use send to send the request to server
    xhr.send();
}
  )
}
//how to use Promise:-
myAxios('POST',url){
  name:"vc",
  job:"ae"
}.then((res)=>{
  console.log('message from then block',res);
}).catch((err)=>{
 // .....
})
*/