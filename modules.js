/*  modules */
/* PROBLEM STATEMENT:- when working on a  big project or long codes   

   //module concept:- we have two .js files(First file has VARIABLES, FUNCTIONS, CLASSES), now if i want to use these variables,functions and classes INTO second file, here with the help of MODULES we use andy function, varable and class of the first file and second file 
   //it increases the re-useability and maintainability of the codes.
   //it increases the loading of the HTML files.

   
      //Example:-(make two files and use the name variable and the second file)

          /*FILE1:-

              export let person = "VC";

              export function hello(){

               }
               class user{

               }

        //FILE2:-(using keyword EXPORT in the file1 i.e export let name = "VC") (in file2 use the keyword IMPORT)

          import {person} from `./file1.js`

          import {hello} from `./file1.js`
          //one more way to do this:-
          import {person, hello, user} from `./file1.js`

      //Example:- to use this files in HTML use this syntax:-

          <script type = "module" src="./file2.js"></script>
          */  

   //modules has two different functions:- 1. IMPORT     2. EXPORT

    
/*   
  **EXAMPLE USING MODULE1 AND MODULE2:-

import { name } from './module1-user.js';
console.log(name);

import { code } from './module1-user.js';
code(); 


//IF WE NEED TO IMPORT(shortcut) MANY FILES FROM DEIFFERENT .JS FILES, WE CAN USE THIS TECHNIQUE:-
import { withdraw, deposit } from './module2-account.js';
withdraw();
deposit();


//WE CAN ALSO RENAME THE IMPORT(FUNCTIONS, VARIABLES ETC.) BECAUSE SOME FUNCTIONS, VARIABLES ETC. WILL HAVE SAME NAMES BUT THEY ARE IN DIFFERENT FILES. SO, WE RE-NAME THEM WHILE IMPORTING TO AVOID NAMES COLLISION... REGARDLESS OF THEIR NAMES OF EXPORTS.:-
import { withdraw as wd } from './module1-user.js';
wd(); //HERE TWO FUNCTIONS HAVE SAME NAMES SO WE RE-NAME ONE AND IMPORT THEM AND THEY ARE CALLED SEPARATELY BECAUSE THEIR FILES ARE DIFFERENT.


//IF WANT TO EXPORT(SHORT-CUT) MANY VARIABLES, FUNCTIONS AND CLASSES ETC. FROM ONLY ONE FILE, WE CAN USE THIS:-
import * as userfile from './module1-user.js';
userfile.code();
console.log(userfile.name);
userfile.withdraw();
wd();

import * as accountfile from './module2-account.js';
accountfile.deposit();
accountfile.withdraw();
*/


/*
//PURPOSE OF DEFAULT FUNCTION:- WHEN THE WHOLE CODE IS CALLED OR INVOKED WITH ONLY ONE FUNCTIONS IN .JS FILES, WE CAN JUST MAKE THAT ONE FUNCTION DEFAULT AND USE IT WHEN IMPORT. WHEN FUNCTIONS, VARIABLES ETC. HAVE SAME NAME AND THEIR IS A CHANCE OF COLLISION JUST MAKE THEM DEFAULT FUNCTIONS, SO THAT WHEN WE IMPORT THEM WE NEED TO RE-NAME THEM AND THIS REMOVES THE NAME COLLISION ERROR.
//CALLING DEFAULT FUNCTION:-ALWAYS NAME DEFAULT FUNCTION WHEN CALLING:-
import { default as userdefault, withdraw as wd, code } from './module1-user.js';
userdefault();
wd();
code();

import { default as accountdefault, withdraw, deposit } from './module2-account.js';
accountdefault();
withdraw();
deposit();
*/