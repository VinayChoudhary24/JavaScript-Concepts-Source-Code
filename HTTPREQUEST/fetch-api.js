const url = 'https://jsonplaceholder.typicode.com/users';

//create function
function myAxios(method, url, body=null){

 //create header(we can group all the headers)
  const headers = {
    'content-type': 'application/json',
  }  

 //fetch by default method is GET and returns PROMISE by default 
  return fetch(url,{
    method:method,
    headers:headers, //for header we create a variable
    body: JSON.stringify(body)
  //this parameter is to POST(object)
  }).then((response)=>{
    return response.json(); //here RESPONSE is ReadableStream and we convert it into JSON. with the help of this we will get all data from the website in the CONSOLE just like XHR
  }); 
}

/*
myAxios('GET', url).then((response)=>{
  console.log(response);
}).catch((Error)=>{

})*/

//use POST here and pass the object to add in the body
myAxios('POST', url, {name:"vc", job:"ae"}).then((response)=>{ //we will get the new data in the console i.e added wit id
  console.log(response);
}).catch((Error)=>{
  console.log(Error);
})




//MOST POWERFULL FEATURE OF FETCH:- BODY:READABLESTREAM, we need to parse readablestream to get the data