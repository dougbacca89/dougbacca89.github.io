/*
 * FUNCTIONS:
 *
 * Functions are a block of code stored so you can call on it to do a specific task as many
 * times as you want at later times.
 */

// 1. Phases of Using Functions //
/*
 * There are two phases to a function.
 *      1) Creating the function.
 *      2) Using the function.
 */

// 2. Parameters and Arguments //
function add(num1, num2) {};
add(1, 2);
/*
 * Parameters of a function are made when we creat a function so we can use arguments when
 * we call a function. Above we see the parameters num1 and num2 when we create the add function
 * and also the arguements 1 and 2 when we call the function.
 */

// 3. Named Functions //
function add () {};
/*
 * Named functions are declared by themselves with their name after the function keyword. Above
 * is the named function add.
 */

// 4. Function Expressions //
var add = function () {};
/*
 * Function Expressions are assigned to variables instead of the function itself having a name.
 * Above is the function expression add instead of the named function add.
 */

// 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value.
//    How do we specify inputs, and how do we specify outputs?
/*
 * Function inputs can very how you see fit from 0 to whatever, the same is for outputs depending
 * how you code your function.
 */

// 6. Using Functions to Modify Variables When Dealing With Scope //
/*
 * When dealing with variables within scope and funtions, the variables created in the globle scope 
 * are available inside the functions but the variables created inside the functions are not
 * available in the global scope outside of the function it was created in.
 */

// 7. Closures //
/*
 * Closure is maintaining access to values by enclosing them in function bodies. Basicly you can
 * access the variables through its parent scope of the fuction.
 */