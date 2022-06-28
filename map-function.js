/*   map()   */
//manipulate each element of the object.
//tranforms the element into array.
//perform any operation with specific element in object.
//not modify array and return a new one.
//used to filter array

    //example  to modify current array and return new also

        /*
        const arr=[1,2,33,4];

        //call arr and pass map function
        const map = arr.map(x=>x*2);

        //call both arrays
        console.log(arr);
        console.log(map);
        */
        

    //example with object

        /*
        const cart =[{product:"laptop",price:55000}, {product:"mobile",price:14000}];

        const product = cart.map(x=>x.product); //array of product name
        const price = cart.map(x=>x.price); //array of product price

        console.log(product);
        console.log(price);
        */
        

/*   map in detail  */
//new in ECMAScript 6
// a data structure
// map of object hold key value pair and remember the origin insertion of the keys.
//use any value as a key or value in map.
//free to specify any type of value like primitive or object.
//map is just like object that they can map a key to a value
//map is introduced because of the drawbacks of objects i.e key must be a symbol or string.
// to get the size of the map you can use the size property.

/* create a map  */
/*
To create a map:-
   1.SET() method, is used to set the value for the key in the map object
   2.GET() method, is used to return a value associated with the key.
*/
   
     //example

       /*
       //call map constructor
       const myMap=new Map();

       //we will create three variables
       let keystring="keystring",
           keyobj={},
           keyfunc=function(){};

        //use set() method to set key=> value
        myMap.set(keystring,"keystring value");
        myMap.set(keyobj,"keyobject value");
        myMap.set(keyfunc,"keyfunction value");

        //know size of the map object
        console.log(myMap.size);

        //using get() method print map object values
        console.log(myMap.get(keystring));
        console.log(myMap.get(keyobj));
        console.log(myMap.get(keyfunc));

        //set NaN as a key
        myMap.set(NaN,"not a number");

        console.log(typeof NaN);
        console.log(myMap.get(NaN));

        //iterate map key and value with for of(objects)
        for(let[key,value] of myMap){
            console.log(`map keys: ${key}, values: ${value}`);
        }
        */
        

    /*
        //another way to create map object
    const newmap=new Map([
        [1,"one"],
        [2,"two"],
        [3,"three"]
    ]);

    //iterate this map object using foreach() method
    newmap.forEach(function(value,key){
        console.log(`map keys: ${key}, value: ${value}`);
    });
    */
    

/* weakset */
//we cannot iterate(no for of, foreach)
//we can only store
//only with objects
 
  /*
  //create weakset
   let ws = new WeakSet();

   //store a variable
   var obj1={
       "name":"TG" //put the object key in double""
   };
   var obj2={
       "name":"GT"
   };
   ws.add(obj1);
   ws.add(obj2);
   console.log();
   */



/*   weak maps   */
/*is identical to the map object, but there are three disparity maps and weak maps:-
     1.key must be an object.
     2.cannot be iterated or cleared
     3.can be garbage collected(memory management:- no longer needed and reclaims it)
     4.only with objects
     5.references to key objects is weak as compare to Map.
*/
    
    //example(garbage collection)
 
       /*
       //call weakmap constructor()
       let weakmap = new Weakmap();

       let obj={},
       obj1={};

       //set weakmap key and value
       weakmap.set(obj,"private");
       weakmap.set(obj1,"private data");

       console.log(weakmap.get(obj1)); //here, we know the weakmap key
       */

    //using for of loop we will try to access weakmap key and value
    /*
    for(let[key,value] of weakmap){
        console.log(key);
        console.log(value);
    } //return weakmap is not iterable
    */


/*   set() object   */
//allows you to store unique values of any type.
//duplicate values are not allowed
//references to objects is strong as compared to weakset
  
     //example

     /*
    const st=new Set([1,2,3,4,4]);

    //add element in the set object using add() method
    st.add(1);
    st.add(2);
    st.add({a:"one", b:"two"});

    //duplicate value rejected
    st.add(2);

    //to know element is present in the collection or not- use has() method
    console.log(st.has(4));

    //to delete the element
    st.delete(4);

    console.log(st);

    //iterate set() objects using for of loop 
    for(let item of st){
        console.log(item);
    }

    //using for each loop
    st.forEach(value=>{
        console.log(value);
    });
    */




    






















        


        


     

  




        

         







