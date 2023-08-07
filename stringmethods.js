document.write("<h1>string methods</h1>");

var str = "Javascript is a great language";

// lenth method is used to find the lenght of string
var a =  str.length;

document.write(a);

// toLowerCase(); is used to convert the string into small letter
// same as a toUpperCase();

document.write("<br>"+str.toLowerCase());

document.write("<br>"+str.toUpperCase());

// includes() is used to find word in a given string
// include returns true or false
a = str.includes("ipt");
document.write("<br>"+a);

// startsWith() it returns true or false and it serch staring 
// The starts with method is used determine whether a string starts with  a character or a particular string
// The method returns a boolean true in case the string starts with the specified characters
a = str.startsWith("Javascript");

document.write("<br>"+a);

// endsWith() it is opposite as a startswith and it method checks end of string

a = str.endsWith("age");

document.write("<br>"+a);

// search() it is the search string from variable string 
// it returns index of string if the element is founded in a string
// element is not found in given string it returns -1
a = str.search("g");

document.write("<br>"+a);

// match() it is used to match the word in a string and collect and it returns in the form array

a = str.match(/i/g); //g means globaly

document.write("<br>"+a);

// indexof() it returns the index of the element in shtring
 
a = str.indexOf("is");
document.write("<br>"+a);

a = str.lastIndexOf("is"); //it serch from last indexs
document.write("<br>"+a);

a = str.replace("Javascript","php"); // replace the word in other words in string
document.write("<br>"+a);

// trim() it is used to remove the spces from the string

var str2 = "       Javascript    ";

a = str2.trim();

document.write("<br>"+a);//remove the speces 

// charAt() it returns the given position in this function and returns the string

a = str.charAt(3);

document.write("<br>"+a);

// charCodeAt() it returns the ascii code of geiven index 

a = str.charCodeAt(3);

document.write("<br>"+a); 

// String.fromCharCode() it converts the unicode  values in characters

a = String.fromCharCode(110);

document.write("<br>"+a);

// split() it is used to convert the string split in the form of  array 

a = str.split(" ");
document.write("<br>"+a);

// .repeat() it is used to repeat the string in number of times 

a = str2.repeat(3);
document.write("<br>"+a);
