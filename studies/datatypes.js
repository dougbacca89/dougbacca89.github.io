/*
 * DATATYPES:
 *
 * Data Types are quite simply a type of value.
 */
 
// 1. Number //
1, 2, 3;
/*
 * Numbers are any numeric data.
 */

// 2. String //
"I am a string.";
/*
 * Strings are any character data.
 */

// 3. Boolean //
true, false;
/*
 * Booleans are true and false values.
 */

// 4. Array //
var array = [1, false, "yes", undefined];
/*
 * Arrays are an indexed group of data grouped together with square brackets.
 */

// 5. Object //
var object = {key1: "value1", key2: "value2"};
/*
 * Objects are a group of data with key/value pairs grouped together with curly brackets. 
 */

// 6. Function //
function add(num1, num2) {return num1 + num2};
/*
 * Functions are a type of data that holds a block of code that can be reused. Functions are
 * declared with the keyword function with a name, contain parameters in parenetheses, and
 * a block of code in curly brackets.
 */

// 7. undefined //
undefined;
/*
 * Undefined data types are data without value or uninitialized.
 */

// 8. null //
null;
/*
 * Null data types are data without value(like undefined) or nullified by a programmer.
 */

// 9. NaN //
NaN;
/*
 * NaN stands for Not a Number.
 */

// 10. Infinity and -Infinity //
Infinity; -Infinity;
/*
 * Infinity and -Infinity are constant values which are used to represent a value which
 * is the highest or lowest avalible respectively.
 */

// 11. Primitive/Simple and Complex Data Types //
//Primitive/Simple
1; "string"; true; false; NaN; undefined; null;
/*
 * Primitive/Simple data types include numbers, strings, booleans, NaN, undefined, null,
 * Infinity, and -Infinity. These are simple because they are immutable which means they
 * do not hold or collect other values. Simple data types are copied by value which
 * means they are copied from one variable to the next.
 */
//Complex
var arr = []; var obj = {}; var func = function () {};
/*
 * Complex data types include arrays, objects, and functions. These are complex because
 * they are mutable which means they collect and hold other values and thier sizes are
 * indefinite. Complex data types are copied by reference.
 */

// 12. Copy by Value and Copy by Reference //
/*
 * As stated above a big difference between Complex and Simple data types are that
 * simple data is copied by value and complex data is copied by reference.
 */
//Copy by Value
var a = 1;      // => a = 1
var b = a;      // => b = 1
b = 2;          // => b = 2
console.log(a); // => prints 1 to the console
/*
 * As we see above when we set the value of b equal to a the value of a is copies to b.
 * But when we then change the value of b to 2, b is then equal to 2 but that does not
 * change the value of a as shown with a still printing 1 to the console. This is a
 * result of being copied by value.
 */
//Copy by Reference
var obj = {name: "Wilber"}; // => obj = {name: "Wilber"}
var obj2 = obj;             // => obj2 = {name: "Wilber"}
obj2.name = "Peter";        // => obj2 = {name: "Peter"}
console.log(obj);      // => obj = {name: "Peter"}
/*
 * Now for the copy by reference again we see above we obj with the key of name and the
 * value of "Wilber" and obj2 is set equal to obj. When we change the value of "Wilber"
 * to "Peter" in obj2 and the try to log obj to the console, we see that we will get
 * "Peter" because obj was changed when we changed obj2. This is a result of being copied
 * by reference.
 */