/*
 * CONTROL FLOW:
 *
 * Controling the flow of or code can be done with the use of conditional statements. These
 * conditional statements are if-elseif-else or switch statements. These statements are
 * based on boolean values to get things done.
 */

// 1. If //
/*
 * If-elseif-else statements are always started with an if statement. An if statement asks if
 * a condition is true then executes a block of code behind it if the condition was true. If the
 * condition was false the code is ignored and not run.
 */
// If Statement Example
/*
 * if (condition checked to be true) {
 *   code run if condition is true
 * }
 */

// 2. Else-If //
/*
 * Else-If statements work the exact same way as If statements except for one difference. They
 * always follow an if statement if needed. The reason for Else-If statements is to add on to your
 * conditional statement to cover as many possibilities as needed. But keep in mind your first
 * condition that proves to be true will execute its code and the whole statement will then stop.
 */
// Else-If Statement Example
/*
 * if (condition checked to be true) {
 *   code run if condition is true
 * }
 * else if (condition checked to be true if the above If was not true) {
 *   code run if condition is true
 * }
 */
// 3. Else //
/*
 * Else statements work as an end all to an if-elseif chain. If nothing else if true in the chain
 * an else statement is used to run code if needed in that event. When writing the Else statement
 * there is one difference in that there is no condition that you need to write. This is because
 * its condition is pre-stated as if all else fails do this.
 */
// Else Statement Example
/*
 * if (condition checked to be true) {
 *   code run if condition is true
 * }
 * else if (condition checked to be true if the above If was not true) {
 *   code run if condition is true
 * }
 * else {
 *   if all else fails run this code
 * }
 */
// 4. Switch //
/*
 * Switch statements work in a similar way as if-elseif-else statements but writen in a different
 * way. These Switch statements evaluate an input expression or value and try to match it to a case
 * value. If this match proves to be true it executes a line of code. A big difference is the need
 * for a break statement to end each case. You can also make the equivalent to an Else as well in
 * the form of default with no condition just like Else and will have an if all else fails line of
 * code to run.
 */
 // Switch Statement Example
 /*
  * switch (input to match) {
  *     case valueToCheck :
  *         codeToRunIfTrue;
  *         break;
  *     case valueToCheck :
  *         codeToRunIfTrue;
  *         break;
  *     default:
  *         codeToRunIfAllElseFails;
  * }
  */