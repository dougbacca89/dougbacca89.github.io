/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. var, let, const //
/*
 * We can assign values to var, let, and const, but they all have specific behaviors to how they
 * work in our code.
 */
var variable = 1;;
/*
 * Variable Behaviors:
 * 1) They are reassignable
 * 2) They are hoisted
 * 3) They are scoped to functions
 * 4) They are NOT scoped to if blocks
 * 5) They are NOT scoped to loop blocks
 */
let let1 = 2;
/*
 * Let Behaviors:
 * 1) They are reassignable
 * 2) They are NOT hoisted
 * 3) They are scoped to functions
 * 4) They are scoped to if blocks
 * 5) They are scoped to loop blocks
 */
const constant = 3;
/*
 * Constant Behaviors:
 * 1) They are NOT reassignable
 * 2) They are NOT hoisted
 * 3) They are scoped to functions
 * 4) They are scoped to if blocks
 * 5) they are scoped to loop blocks
 *
 */

// 5. Hoisting //
/*
 * Hoisting happens when you run your code and your variable declarations (functions as well) are 
 * raised to the top of your code. Since this happens var, let, and const react differently wehen
 * trying to reference them before declaration.
 */
//console.log(a); // => would print undefined to the console because var a; is hoisted to the top
//var a = 1;      //    of the code above the console.log but its value of 1 is not.

//console.log(b); // => both of these logs would print a reference error to the console because both
//console.log(c); //    let b; and const c; are not hoisted to the top so the console logs trying to
let b = 2;      //    reference them cannot find any reference of them.
const c = 3;